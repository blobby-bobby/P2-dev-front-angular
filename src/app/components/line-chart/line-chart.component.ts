import { Component, Input } from '@angular/core';
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
  @Input() lineChartLabels: string[] = [];
  @Input() numberOfMedalsByYear: number[] = [];

  lineChartData: ChartDataset[] = [];
  lineChartType: ChartType = 'line';
  lineChartOptions = chartOptionsConfig;
  lineChartLegend = false;

  ngOnInit(): void {
    this.lineChartLabels = this.lineChartLabels;
    this.lineChartData = [
      {
        data: this.numberOfMedalsByYear,
        borderColor: chartColors[0],
        pointBackgroundColor: chartColors[0],
      },
    ];
  }
}
