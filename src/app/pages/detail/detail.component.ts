import { Component, OnInit } from '@angular/core';
import { BadgeType } from 'src/app/core/models/Badge';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BadgeListComponent } from '../../components/badge-list/badge-list.component';
import { TitleComponent } from '../../components/title/title.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { PartcipationType } from 'src/app/core/models/Participation';
import { OlympicType } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [TitleComponent, BadgeListComponent, RouterLink, LineChartComponent],
})
export class DetailComponent implements OnInit {
  datas: BadgeType[] = [];
  pageTitle: string = '';

  lineChartLabels: string[] = [];
  numberOfMedalsByYear: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    const countryId = Number(this.route.snapshot.paramMap.get('id'));
    if (countryId) {
      this.olympicService
        .getCountryById(countryId)
        .subscribe((countryData: OlympicType | undefined) => {
          // Update the datas badgesand page title with the retrieved country data
          this.pageTitle = countryData?.country || 'Country';
          this.datas = [
            {
              datakey: 'Number of entries',
              datavalue: countryData?.participations.length,
            },
            {
              datakey: 'Total number medals',
              datavalue: countryData?.participations.reduce(
                (total: number, participation: PartcipationType) =>
                  total + participation.medalsCount,
                0
              ),
            },
            {
              datakey: 'Total number of athletes',
              datavalue: countryData?.participations.reduce(
                (total: number, participation: PartcipationType) =>
                  total + participation.athleteCount,
                0
              ),
            },
          ];

          // Update the line chart data with the retrieved country data
          this.lineChartLabels = ['2012', '2016', '2020', '2024'];
          this.numberOfMedalsByYear = [5, 137, 260, 55];
        });
    }
  }
}
