'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
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
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Sales" stroke="#0284c7" fill="#0ea5e9" fillOpacity={0.6} />
            <Area type="monotone" dataKey="Revenue" stroke="#10b981" fill="#34d399" fillOpacity={0.6} />
          </AreaChart>
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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};
