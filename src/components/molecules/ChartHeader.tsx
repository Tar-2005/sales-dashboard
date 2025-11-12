import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';

interface ChartHeaderProps {
  title: string;
  subtitle?: string;
  icon?: 'trending' | 'dollar' | 'cart';
}

export const ChartHeader: React.FC<ChartHeaderProps> = ({
  title,
  subtitle,
  icon = 'trending',
}) => {
  const icons = {
    trending: <TrendingUp className="w-6 h-6" />,
    dollar: <DollarSign className="w-6 h-6" />,
    cart: <ShoppingCart className="w-6 h-6" />,
  } as const;

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
        {icons[icon]}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
};
