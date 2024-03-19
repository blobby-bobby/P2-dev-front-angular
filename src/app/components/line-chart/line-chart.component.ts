import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { chartOptionsConfig } from 'src/app/core/utils/chartOptionsConfig';

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
      borderColor: '#793D52',
      pointBackgroundColor: '#793D52',
    },
  ];
  lineChartType: ChartType = 'line';
  lineChartLabels: string[] = ['2012', '2016', '2020', '2024'];
  lineChartOptions: ChartOptions = chartOptionsConfig;

  lineChartLegend = false;
}
