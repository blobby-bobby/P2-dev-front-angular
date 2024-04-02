/**
 * holds the id, name and value properties of the pie graph
 * corresponding to pie chart type from @swimlane/ngx-charts
 */
export interface PieGraphData {
  id: number;
  name: string;
  value: number;
  extra: { id: number };
}
