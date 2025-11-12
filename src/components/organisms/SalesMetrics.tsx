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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
          {icon}
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="text-sm font-semibold">{Math.abs(change).toFixed(1)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
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
