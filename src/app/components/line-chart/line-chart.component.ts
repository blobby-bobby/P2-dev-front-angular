import { Component } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import {
  chartColors,
  chartOptionsConfig,
} from 'src/app/core/utils/chartOptionsConfig';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  lineChartData: ChartDataset[] = [
    {
      data: [45, 37, 60, 55],
      borderColor: chartColors[0],
      pointBackgroundColor: chartColors[0],
    },
  ];
  lineChartType: ChartType = 'line';
  lineChartLabels: string[] = ['2012', '2016', '2020', '2024'];
  lineChartOptions = chartOptionsConfig;
  lineChartLegend = false;
}
