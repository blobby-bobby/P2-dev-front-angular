import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { PieGraphData } from 'src/app/core/models/PieGraphData';
import { OlympicType } from 'src/app/core/models/Olympic';
import { ParticipationType } from 'src/app/core/models/Participation';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  providers: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  constructor(private olympicService: OlympicService, private router: Router) {}

  public olympics$!: Observable<OlympicType[]>;
  graphData$!: Observable<PieGraphData[]>;

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.graphData$ = this.olympics$.pipe(
      map((olympics) => {
        return olympics !== undefined
          ? [...olympics].map((olympic) => {
              return {
                id: olympic.id,
                name: olympic.country,
                value: olympic.participations.reduce(
                  (acc: number, curr: ParticipationType) => {
                    return acc + curr.medalsCount;
                  },
                  0
                ),
                extra: { id: olympic.id },
              };
            })
          : [];
      })
    );
  }

  onSelect(event: any): void {
    const id: number = event.extra.id;
    this.router.navigateByUrl(`detail/${id}`);
  }
}
