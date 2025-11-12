'use client';

import React from 'react';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { Button } from '../atoms/Button';
import { Filter } from 'lucide-react';

interface FilterControlProps {
  selectedYear: number;
  years: number[];
  threshold: number;
  onYearChange: (year: number) => void;
  onThresholdChange: (threshold: number) => void;
  onApplyFilter: () => void;
}

export const FilterControl: React.FC<FilterControlProps> = ({
  selectedYear,
  years,
  threshold,
  onYearChange,
  onThresholdChange,
  onApplyFilter,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-primary-600" />
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Advanced Filters</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Select Year"
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
          options={years.map((year) => ({ value: year, label: year.toString() }))}
          hint="Choose a year to analyze"
        />
        
        <Input
          label="Sales Threshold"
          type="number"
          value={threshold}
          onChange={(e) => onThresholdChange(Number(e.target.value))}
          placeholder="e.g., 25000"
          hint="Minimum sales value to display"
        />
        
        <div className="flex items-end gap-2">
          <Button 
            onClick={onApplyFilter}
            variant="primary"
            className="flex-1"
          >
            Apply Filter
          </Button>
          <Button 
            onClick={() => {
              onYearChange(new Date().getFullYear());
              onThresholdChange(0);
            }}
            variant="outline"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};
