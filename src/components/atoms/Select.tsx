"use client";

import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string | number; label: string }[];
  error?: string;
  hint?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  hint,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <select
        className={`px-4 py-2.5 border-2 border-slate-200 dark:border-slate-600 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          dark:bg-slate-800 dark:text-white
          transition-all duration-200
          bg-white appearance-none cursor-pointer
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && !error && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};
