import { Component, OnDestroy, OnInit } from '@angular/core';
import { BadgeType } from 'src/app/core/models/Badge';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BadgeListComponent } from '../../components/badge-list/badge-list.component';
import { TitleComponent } from '../../components/title/title.component';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicType } from 'src/app/core/models/Olympic';
import { tap, Subscription, Observable, map } from 'rxjs';
import { LineGraphData } from 'src/app/core/models/LineGraphData';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartComponent } from 'src/app/components/line-chart/line-chart.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [
    TitleComponent,
    BadgeListComponent,
    RouterLink,
    NgxChartsModule,
    LineChartComponent,
  ],
})
export class DetailComponent implements OnInit, OnDestroy {
  public datas: BadgeType[] = [];
  public pageTitle!: string;
  private subscription!: Subscription;
  public selectedCountryId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private olympicService: OlympicService
  ) {
    this.selectedCountryId = 0;
  }

  /**
   * Generate components with selected country data id's.
   * Generates the datas badges & the line chart with the retrieved data.
   *
   */
  ngOnInit(): void {
    this.selectedCountryId = Number(this.route.snapshot.params['id']);
    this.subscription = this.olympicService
      .getCountryById(this.selectedCountryId)
      .pipe(
        tap((olympic: OlympicType) => {
          if (!olympic) {
            this.router.navigateByUrl('pageNotFound');
          }

          this.pageTitle = olympic.country;

          this.datas = [
            {
              datakey: 'Number of entries',
              datavalue: olympic.participations.length,
            },
            {
              datakey: 'Total number medals',
              datavalue: olympic.participations.reduce(
                (acc, curr) => acc + curr.medalsCount,
                0
              ),
            },
            {
              datakey: 'Total number of athletes',
              datavalue: olympic.participations.reduce(
                (acc, curr) => acc + curr.athleteCount,
                0
              ),
            },
          ];
        })
      )
      .subscribe();
  }

  /**
   * Called when the component is destroyed.
   * Unsubscribes from the subscription to avoid memory leaks.
   *
   * @return {void} Nothing is returned.
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
