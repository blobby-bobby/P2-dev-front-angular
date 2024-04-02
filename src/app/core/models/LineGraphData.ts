/**
 * holds the name and series properties of the line graph
 * corresponding to line chart type from @swimlane/ngx-charts
 */
export interface LineGraphData {
  name: string;
  series: {
    name: string;
    value: number;
  }[];
}
