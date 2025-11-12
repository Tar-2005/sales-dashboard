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
    <div className="card bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 animation-fade-in">
      <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        📈 Yearly Sales Comparison
      </h3>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: 'none', 
                borderRadius: '8px',
                color: '#f1f5f9'
              }}
            />
            <Legend />
            <Bar dataKey="Total Sales" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Avg Monthly Sales" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
