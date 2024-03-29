import { Component, OnInit } from '@angular/core';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { ChartDataset, ChartType } from 'chart.js';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicType } from 'src/app/core/models/Olympic';
import { Observable, of } from 'rxjs';
import {
  chartColors,
  chartOptionsConfig,
} from 'src/app/core/utils/chartOptionsConfig';
import { Router } from '@angular/router';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  pieChartData: ChartDataset[] = [];
  pieChartType: ChartType = 'pie';
  pieChartOptions = chartOptionsConfig;
  pieChartLabels: string[] = [];
  pieChartLegend = false;

  constructor(private olympicService: OlympicService, private router: Router) {}

  /**
   * Initialize component and retrieve Olympics data to populate pie chart.
   *
   * @return {void}
   */
  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe((data: OlympicType[]) => {
      this.pieChartData = [
        {
          data: data.map((country) =>
            country.participations.reduce(
              (total, participation) => total + participation.medalsCount,
              0
            )
          ),
          backgroundColor: chartColors,
        },
      ];
      this.pieChartLabels = data.map((country) => country.country);
    });
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
