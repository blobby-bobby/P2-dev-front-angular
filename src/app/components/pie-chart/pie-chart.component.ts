import { Component, OnInit } from '@angular/core';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { ChartData, ChartType, Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicType } from 'src/app/core/models/Olympic';
import {
  chartColors,
  chartOptionsConfig,
} from 'src/app/core/utils/chartOptionsConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  pieChartData: ChartData<'pie', number[], string> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };
  pieChartType: ChartType = 'pie';
  pieChartOptions = chartOptionsConfig;
  pieChartLabels: string[] = [];
  plugins = [ChartDataLabels];

  constructor(private olympicService: OlympicService, private router: Router) {}

  /**
   * Initialize component and retrieve Olympics data to populate pie chart.
   *
   * @return {void}
   */
  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe((data: OlympicType[]) => {
      this.pieChartData = {
        labels: data.map((country) => country.country),
        datasets: [
          {
            data: data.map((country) =>
              country.participations.reduce(
                (total, participation) => total + participation.medalsCount,
                0
              )
            ),
            backgroundColor: chartColors,
          },
        ],
      };
      this.pieChartLabels = this.pieChartData?.labels ?? [];
    });

    Chart.defaults.font.family = 'Montserrat';
    Chart.defaults.color = 'white';
    Chart.defaults.font.weight = 'bold';
    Chart.defaults.plugins.datalabels = {
      color: 'white',
      anchor: 'end',
      align: 'start',
      offset: 20,
      formatter: (value, ctx) => {
        value = this.pieChartLabels[ctx.dataIndex];
        console.log(ctx);
        return value;
      },
    };
  }

  /**
   * A function that handles the click event on the chart.
   * Navigates to the detail page for the clicked country.
   * based on ng2-charts library : https://krish512.github.io/ng4-charts/
   *
   * @param {any} e - the event object, type 'any' in the ng2-charts library
   * @return {void}
   */
  chartClicked(e: any): void {
    const id = e.active[0].index + 1;
    this.router.navigate(['/detail', id]);
  }
}
