'use client';

import React from 'react';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { Button } from '../atoms/Button';

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
    <div className="flex flex-wrap gap-4 items-end">
      <Select
        label="Select Year"
        value={selectedYear}
        onChange={(e) => onYearChange(Number(e.target.value))}
        options={years.map((year) => ({ value: year, label: year.toString() }))}
        className="min-w-[120px]"
      />
      
      <Input
        label="Sales Threshold"
        type="number"
        value={threshold}
        onChange={(e) => onThresholdChange(Number(e.target.value))}
        placeholder="Enter minimum sales"
        className="min-w-[200px]"
      />
      
      <Button onClick={onApplyFilter}>
        Apply Filter
      </Button>
    </div>
  );
};
