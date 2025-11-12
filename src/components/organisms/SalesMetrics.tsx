"use client";

import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div className="card bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-sm ${
            isPositive 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
          }`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{Math.abs(change).toFixed(1)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  );
};

interface SalesMetricsProps {
  totalSales: number;
  totalRevenue: number;
  averageSales: number;
  growthRate?: number;
}

export const SalesMetrics: React.FC<SalesMetricsProps> = ({
  totalSales,
  totalRevenue,
  averageSales,
  growthRate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <MetricCard
        title="Total Sales"
        value={totalSales.toLocaleString()}
        change={growthRate}
        icon={<ShoppingCart className="w-6 h-6" />}
      />
      <MetricCard
        title="Total Revenue"
        value={`$${(totalRevenue / 1000).toFixed(1)}K`}
        icon={<DollarSign className="w-6 h-6" />}
      />
      <MetricCard
        title="Average Monthly Sales"
        value={averageSales.toLocaleString()}
        icon={<TrendingUp className="w-6 h-6" />}
      />
    </div>
  );
};
