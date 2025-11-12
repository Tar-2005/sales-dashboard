'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { YearlySales } from '@/types/sales';

interface YearlySalesChartProps {
  data: YearlySales[];
}

export const YearlySalesChart: React.FC<YearlySalesChartProps> = ({ data }) => {
  const chartData = data.map((item) => ({
    year: item.year.toString(),
    'Total Sales': item.totalSales,
    'Avg Monthly Sales': item.averageMonthlySales,
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Yearly Sales Comparison
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total Sales" fill="#0ea5e9" />
          <Bar dataKey="Avg Monthly Sales" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
