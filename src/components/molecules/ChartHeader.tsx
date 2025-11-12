"use client";

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
    trending: <TrendingUp className="w-7 h-7" />,
    dollar: <DollarSign className="w-7 h-7" />,
    cart: <ShoppingCart className="w-7 h-7" />,
  } as const;

  return (
    <div className="flex items-center gap-4 mb-8 animation-slide-in">
      <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl text-primary-600 dark:text-primary-400 shadow-soft">
        {icons[icon]}
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>
        {subtitle && <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};
