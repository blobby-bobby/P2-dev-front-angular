import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
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
  // observable
  public olympics$: Observable<OlympicType[]> = of([]);
  olympicSubscription: Subscription | undefined;

  datas: BadgeType[] = [];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe((olympics: OlympicType[]) => {
      let uniqueParticipations: number[] = [];

      // Iterate through the olympics array and extract unique JOs in the data
      olympics.forEach((country) => {
        country.participations.forEach((participation) => {
          if (!uniqueParticipations.includes(participation.year)) {
            uniqueParticipations.push(participation.year);
          }
        });
      });

      this.datas = [
        { datakey: 'Number of JOs', datavalue: uniqueParticipations.length },
        { datakey: 'Number of countries', datavalue: olympics.length },
      ];
    });
  }

  ngOnDestroy(): void {
    if (this.olympicSubscription) {
      this.olympicSubscription.unsubscribe();
    }
  }
}
