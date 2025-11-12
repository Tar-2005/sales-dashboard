export interface SalesData {
  month: string;
  sales: number;
  revenue: number;
  year: number;
}

export interface YearlySales {
  year: number;
  totalSales: number;
  totalRevenue: number;
  averageMonthlySales: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  year?: number;
}

export type ChartType = 'bar' | 'line' | 'area';
