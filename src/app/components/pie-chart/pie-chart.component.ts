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
@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  // observable
  public olympics$: Observable<OlympicType[]> = of([]);

  // charts parameters
  public pieChartData: ChartDataset[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartOptions = chartOptionsConfig;
  public pieChartLabels: string[] = [];
  public pieChartLegend = false;

  // constructor
  constructor(private olympicService: OlympicService, private router: Router) {}

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

  // redirect to detail page
  redirectToDetailPage(event: MouseEvent) {
    console.log(event);
    // this.router.navigate(['/detail', id]);
  }
}
