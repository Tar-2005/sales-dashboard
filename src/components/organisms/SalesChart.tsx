'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { SalesData, ChartType } from '@/types/sales';

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  title: string;
}

export const SalesChart: React.FC<SalesChartProps> = ({
  data,
  chartType,
  title,
}) => {
  const chartData = data.map((item) => ({
    name: item.month,
    Sales: item.sales,
    Revenue: item.revenue / 1000, // Convert to thousands for better visualization
  }));

  const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];
  
  const pieData = chartData.map((item, index) => ({
    name: item.name,
    value: Math.round((item.Sales + item.Revenue) / 2),
  }));

  const renderChart = () => {
    const commonProps = {
      data: chartData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
    } as const;

    switch (chartType) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Sales" stroke="#0284c7" strokeWidth={2} />
            <Line type="monotone" dataKey="Revenue" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        );
      
      case 'area':
        return (
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}`} />
            <Legend />
          </PieChart>
        );
      
      default:
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" fill="#0ea5e9" />
            <Bar dataKey="Revenue" fill="#10b981" />
          </BarChart>
        );
    }
  };

  return (
    <div className="card bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 animation-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <div className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-xs font-semibold text-primary-700 dark:text-primary-300">
          {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart
        </div>
      </div>
      <div className="w-full h-96 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
