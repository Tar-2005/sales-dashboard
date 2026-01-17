'use client';

import React, { useState, useMemo } from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { SalesChart } from '@/components/organisms/SalesChart';
import { YearlySalesChart } from '@/components/organisms/YearlySalesChart';
import { SalesMetrics } from '@/components/organisms/SalesMetrics';
import { ChartHeader } from '@/components/molecules/ChartHeader';
import { FilterControl } from '@/components/molecules/FilterControl';
import { Button } from '@/components/atoms/Button';
import { getYearlyData, getAllYears } from '@/data/salesData';
import { ChartType, YearlySales } from '@/types/sales';

export default function DashboardPage() {
  const years = getAllYears();
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);
  const [appliedThreshold, setAppliedThreshold] = useState<number>(0);

  // Filtered data for selected year
  const yearData = useMemo(() => {
    const data = getYearlyData(selectedYear);
    return data.filter((item) => item.sales >= appliedThreshold);
  }, [selectedYear, appliedThreshold]);

  // Yearly comparison data for bar chart
  const yearlyComparisonData: YearlySales[] = useMemo(() => {
    return years.map((year) => {
      const data = getYearlyData(year);
      const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
      const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
      const averageMonthlySales = data.length ? totalSales / data.length : 0;
      return {
        year,
        totalSales,
        totalRevenue,
        averageMonthlySales: Math.round(averageMonthlySales),
      };
    });
  }, [years]);

  const handleApplyFilter = () => setAppliedThreshold(threshold);

  const handleThresholdChange = (val: number) => {
    setThreshold(val);
    setAppliedThreshold(val);
  };

  // Metrics based on filtered year data
  const filteredMetrics = useMemo(() => {
    const totalSales = yearData.reduce((sum, item) => sum + item.sales, 0);
    const totalRevenue = yearData.reduce((sum, item) => sum + item.revenue, 0);
    const averageSales = yearData.length ? totalSales / yearData.length : 0;

    let growthRate: number | undefined;
    if (selectedYear > Math.min(...years)) {
      const prevYearData = getYearlyData(selectedYear - 1).filter(
        (item) => item.sales >= appliedThreshold
      );
      const prevTotal = prevYearData.reduce((sum, item) => sum + item.sales, 0);
      if (prevTotal > 0) growthRate = ((totalSales - prevTotal) / prevTotal) * 100;
    }

    return { totalSales, totalRevenue, averageSales, growthRate };
  }, [yearData, selectedYear, years, appliedThreshold]);

  return (
    <DashboardLayout>
      <div className="space-y-10 animation-fade-in">
        {/* HEADER */}
        <ChartHeader
          title={`Sales Analytics – ${selectedYear}`}
          subtitle="Comprehensive sales performance overview"
          icon="trending"
        />

        {/* METRICS SECTION */}
        <div className="mt-4">
          <SalesMetrics
            totalSales={filteredMetrics.totalSales}
            totalRevenue={filteredMetrics.totalRevenue}
            averageSales={Math.round(filteredMetrics.averageSales)}
            growthRate={filteredMetrics.growthRate}
          />
        </div>

        {/* FILTER + CHART SELECTION */}
        <div className="card bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-soft rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <FilterControl
            selectedYear={selectedYear}
            years={years}
            threshold={threshold}
            onYearChange={setSelectedYear}
            onThresholdChange={handleThresholdChange}
            onApplyFilter={handleApplyFilter}
          />

          <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 bg-gradient-to-b from-sky-600 to-cyan-400 rounded"></div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Chart Visualization
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant={chartType === 'bar' ? 'primary' : 'outline'}
                onClick={() => setChartType('bar')}
                className="w-full"
              >
                📊 Bar Chart
              </Button>
              <Button
                variant={chartType === 'line' ? 'primary' : 'outline'}
                onClick={() => setChartType('line')}
                className="w-full"
              >
                📈 Line Chart
              </Button>
              <Button
                variant={chartType === 'area' ? 'primary' : 'outline'}
                onClick={() => setChartType('area')}
                className="w-full"
              >
                🥧 Pie Chart
              </Button>
            </div>
          </div>
        </div>

        {/* MAIN CHART */}
        <div className="card bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-2xl p-6 transition-smooth">
          <SalesChart
            data={yearData}
            chartType={chartType}
            title={`Monthly Sales – ${selectedYear}`}
          />
        </div>

        {/* YEARLY COMPARISON */}
        <div className="card bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-2xl p-6 transition-smooth">
          <YearlySalesChart data={yearlyComparisonData} />
        </div>

        {/* DATA INSIGHTS */}
        <div className="glass-effect border border-sky-200 dark:border-sky-700 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2">
            📘 Data Insights
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            This dashboard displays sales data for {years.join(', ')}. Use the filters above to
            customize your view and analyze trends. The data represents typical e-commerce sales
            patterns with seasonal variations.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
