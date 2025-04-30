import { barChartData } from "@/data/bar-chart/bar.chart.data";
import { BarChartMultiple } from "./components/bar.chart";
import { PieChartLabel } from "./components/pie.chart";
import { barChartConfig } from "@/data/bar-chart/bar.chart.config";
import { pieChartData } from "@/data/pie-chart/pie.chart.data";
import { pieChartConfig } from "@/data/pie-chart/pie.chart.config";

export default function Chart() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <BarChartMultiple
        title="Bar Chart - Multiple"
        description="January - April 2025"
        data={barChartData}
        config={barChartConfig}
      />
      <PieChartLabel
        title="Pie Chart - Label"
        description="January - April 2025"
        data={pieChartData}
        config={pieChartConfig}
      />
    </div>
  );
}
