import { ChartConfig } from "@/components/ui/chart";

export interface BarChartMultipleProps {
    title: string;
    description?: string;
    data: any[];
    config: ChartConfig;
  }

  export interface PieChartLabelProps {
    title: string;
    description?: string;
    data: any[];
    config: ChartConfig;
    dataKey?: string;
    nameKey?: string;
  }