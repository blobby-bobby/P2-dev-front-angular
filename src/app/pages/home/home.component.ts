import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BadgeType } from 'src/app/core/models/Badge';
import { OlympicType } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { BadgeListComponent } from '../../components/badge-list/badge-list.component';
import { TitleComponent } from '../../components/title/title.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TitleComponent, BadgeListComponent, PieChartComponent],
})
export class HomeComponent implements OnInit {
  olympicSubscription!: Subscription;
  datas: BadgeType[] = [];

  constructor(private olympicService: OlympicService) {}

  /**
   * Initializes the component and retrieves Olympic data from the olympic service.
   * Extracts unique years of participation and updates the datas badges.
   *
   * @return {void} This function does not return a value.
   */
  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe((olympics: OlympicType[]) => {
      let uniqueParticipations: number[] = [];

      /**
       * Iterate through the olympics array and extract unique JOs in the database.
       */
      olympics.forEach((country) => {
        country.participations.forEach((participation) => {
          if (!uniqueParticipations.includes(participation.year)) {
            uniqueParticipations.push(participation.year);
          }
        });
      });

      /**
       * Update the datas badges with the retrieved data.
       */
      this.datas = [
        { datakey: 'Number of JOs', datavalue: uniqueParticipations.length },
        { datakey: 'Number of countries', datavalue: olympics.length },
      ];
    });
  }
}
