'use client';

import React, { useState, useMemo } from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { SalesChart } from '@/components/organisms/SalesChart';
import { YearlySalesChart } from '@/components/organisms/YearlySalesChart';
import { SalesMetrics } from '@/components/organisms/SalesMetrics';
import { ChartHeader } from '@/components/molecules/ChartHeader';
import { FilterControl } from '@/components/molecules/FilterControl';
import { Button } from '@/components/atoms/Button';
import { salesData, getYearlyData, getAllYears } from '@/data/salesData';
import { ChartType, YearlySales } from '@/types/sales';

export default function DashboardPage() {
  const years = getAllYears();
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);
  const [appliedThreshold, setAppliedThreshold] = useState<number>(0);

  // Get filtered data for selected year
  const yearData = useMemo(() => {
    const data = getYearlyData(selectedYear);
    return data.filter((item) => item.sales >= appliedThreshold);
  }, [selectedYear, appliedThreshold]);

  // Calculate metrics
  const metrics = useMemo(() => {
    const totalSales = yearData.reduce((sum, item) => sum + item.sales, 0);
    const totalRevenue = yearData.reduce((sum, item) => sum + item.revenue, 0);
    const averageSales = yearData.length > 0 ? totalSales / yearData.length : 0;

    // Calculate growth rate compared to previous year
    let growthRate: number | undefined;
    if (selectedYear > Math.min(...years)) {
      const prevYearData = getYearlyData(selectedYear - 1);
      const prevTotal = prevYearData.reduce((sum, item) => sum + item.sales, 0);
      if (prevTotal > 0) {
        growthRate = ((totalSales - prevTotal) / prevTotal) * 100;
      }
    }

    return { totalSales, totalRevenue, averageSales, growthRate };
  }, [yearData, selectedYear, years]);

  // Prepare yearly comparison data
  const yearlyComparisonData: YearlySales[] = useMemo(() => {
    return years.map((year) => {
      const data = getYearlyData(year);
      const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
      const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
      const averageMonthlySales = data.length > 0 ? totalSales / data.length : 0;

      return {
        year,
        totalSales,
        totalRevenue,
        averageMonthlySales: Math.round(averageMonthlySales),
      };
    });
  }, [years]);

  const handleApplyFilter = () => {
    setAppliedThreshold(threshold);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <ChartHeader
          title={`Sales Analytics - ${selectedYear}`}
          subtitle="Comprehensive sales performance overview"
          icon="trending"
        />

        {/* Metrics Section */}
        <SalesMetrics
          totalSales={metrics.totalSales}
          totalRevenue={metrics.totalRevenue}
          averageSales={Math.round(metrics.averageSales)}
          growthRate={metrics.growthRate}
        />

        {/* Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Filters & Controls</h3>
          <FilterControl
            selectedYear={selectedYear}
            years={years}
            threshold={threshold}
            onYearChange={setSelectedYear}
            onThresholdChange={setThreshold}
            onApplyFilter={handleApplyFilter}
          />
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Chart Type</h4>
            <div className="flex gap-2">
              <Button
                variant={chartType === 'bar' ? 'primary' : 'outline'}
                onClick={() => setChartType('bar')}
              >
                Bar Chart
              </Button>
              <Button
                variant={chartType === 'line' ? 'primary' : 'outline'}
                onClick={() => setChartType('line')}
              >
                Line Chart
              </Button>
              <Button
                variant={chartType === 'area' ? 'primary' : 'outline'}
                onClick={() => setChartType('area')}
              >
                Area Chart
              </Button>
            </div>
          </div>
        </div>

        {/* Main Sales Chart */}
        <SalesChart
          data={yearData}
          chartType={chartType}
          title={`Monthly Sales - ${selectedYear}`}
        />

        {/* Yearly Comparison Chart */}
        <YearlySalesChart data={yearlyComparisonData} />

        {/* Info Card */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary-800 mb-2">
            📊 Data Insights
          </h3>
          <p className="text-primary-700">
            This dashboard displays sales data for {years.join(', ')}. 
            Use the filters above to customize your view and analyze trends. 
            The data represents typical e-commerce sales patterns with seasonal variations.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
