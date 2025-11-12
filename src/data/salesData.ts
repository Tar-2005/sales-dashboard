import { SalesData } from '@/types/sales';

// Mock sales data inspired by typical e-commerce/retail patterns
export const salesData: SalesData[] = [
  // 2022 Data
  { month: 'Jan', sales: 15234, revenue: 456789, year: 2022 },
  { month: 'Feb', sales: 13456, revenue: 398765, year: 2022 },
  { month: 'Mar', sales: 18901, revenue: 567890, year: 2022 },
  { month: 'Apr', sales: 16789, revenue: 489234, year: 2022 },
  { month: 'May', sales: 19456, revenue: 598765, year: 2022 },
  { month: 'Jun', sales: 21234, revenue: 645678, year: 2022 },
  { month: 'Jul', sales: 23567, revenue: 712345, year: 2022 },
  { month: 'Aug', sales: 22890, revenue: 689012, year: 2022 },
  { month: 'Sep', sales: 20456, revenue: 615678, year: 2022 },
  { month: 'Oct', sales: 24789, revenue: 745678, year: 2022 },
  { month: 'Nov', sales: 28901, revenue: 867890, year: 2022 },
  { month: 'Dec', sales: 32456, revenue: 978901, year: 2022 },

  // 2023 Data (Growth trend)
  { month: 'Jan', sales: 18456, revenue: 556789, year: 2023 },
  { month: 'Feb', sales: 17234, revenue: 512345, year: 2023 },
  { month: 'Mar', sales: 22456, revenue: 678901, year: 2023 },
  { month: 'Apr', sales: 20890, revenue: 623456, year: 2023 },
  { month: 'May', sales: 24567, revenue: 745678, year: 2023 },
  { month: 'Jun', sales: 26789, revenue: 812345, year: 2023 },
  { month: 'Jul', sales: 29234, revenue: 889012, year: 2023 },
  { month: 'Aug', sales: 28456, revenue: 867890, year: 2023 },
  { month: 'Sep', sales: 26123, revenue: 789234, year: 2023 },
  { month: 'Oct', sales: 30456, revenue: 923456, year: 2023 },
  { month: 'Nov', sales: 35678, revenue: 1078901, year: 2023 },
  { month: 'Dec', sales: 39890, revenue: 1198901, year: 2023 },

  // 2024 Data (Continued growth)
  { month: 'Jan', sales: 22345, revenue: 678901, year: 2024 },
  { month: 'Feb', sales: 21234, revenue: 645678, year: 2024 },
  { month: 'Mar', sales: 27890, revenue: 845678, year: 2024 },
  { month: 'Apr', sales: 25678, revenue: 778901, year: 2024 },
  { month: 'May', sales: 30234, revenue: 912345, year: 2024 },
  { month: 'Jun', sales: 33456, revenue: 1012345, year: 2024 },
  { month: 'Jul', sales: 36789, revenue: 1112345, year: 2024 },
  { month: 'Aug', sales: 35234, revenue: 1067890, year: 2024 },
  { month: 'Sep', sales: 32890, revenue: 995678, year: 2024 },
  { month: 'Oct', sales: 38456, revenue: 1156789, year: 2024 },
  { month: 'Nov', sales: 43567, revenue: 1312345, year: 2024 },
  { month: 'Dec', sales: 48901, revenue: 1478901, year: 2024 },
];

export const getYearlyData = (year: number): SalesData[] => {
  return salesData.filter((data) => data.year === year);
};

export const getAllYears = (): number[] => {
  return [...new Set(salesData.map((data) => data.year))].sort();
};
