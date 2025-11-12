"use client";

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
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
      <input
        className={`px-4 py-2.5 border-2 border-slate-200 dark:border-slate-600 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          dark:bg-slate-800 dark:text-white
          transition-all duration-200
          placeholder-slate-400 dark:placeholder-slate-500
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}`}
        {...props}
      />
      {hint && !error && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};
