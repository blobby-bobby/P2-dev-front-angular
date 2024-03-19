import { Component } from '@angular/core';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicType } from 'src/app/core/models/Olympic';
import { Observable, of } from 'rxjs';
import { chartOptionsConfig } from 'src/app/core/utils/chartOptionsConfig';
@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  // observable
  public olympics$: Observable<OlympicType[]> = of([]);

  // charts parameters
  public pieChartData: ChartDataset[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartOptions: ChartOptions = chartOptionsConfig;
  public pieChartLabels: string[] = [];
  public pieChartLegend = false;

  // constructor
  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.getCountriesTotalMedal().subscribe((data) => {
      this.pieChartData = [
        {
          data: data.map((country) => country.medalsTotal),
          backgroundColor: [
            '#793D52',
            '#89A1DB',
            '#9780A1',
            '#BFE0F1',
            '#B8CBE7',
            '#956065',
          ],
        },
      ];
      this.pieChartLabels = data.map((country) => country.country);
    });
  }
}
