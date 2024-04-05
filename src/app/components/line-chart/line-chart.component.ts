import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LineGraphData } from 'src/app/core/models/LineGraphData';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxChartsModule],
  providers: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  constructor(private olympicService: OlympicService) {}

  @Input() selectedCountryId!: number;

  public xAxis: boolean = true;
  public showXAxisLabel: boolean = true;
  public yAxis: boolean = true;
  public xAxisLabel: string = 'Dates';
  public autoScale: boolean = true;

  public graphData$!: Observable<LineGraphData[]>;

  /**
   * Initialize component with graph data based on selected country ID.
   *
   * @return {void}
   */
  ngOnInit(): void {
    this.graphData$ = this.olympicService
      .getCountryById(this.selectedCountryId)
      .pipe(
        map((data) => {
          let series = [...data.participations].map((value) => {
            return {
              name: value.year.toString(),
              value: value.medalsCount,
            };
          });
          return [
            {
              name: data.country,
              series,
            },
          ];
        })
      );
  }
}
