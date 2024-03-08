import { Component, OnInit } from '@angular/core';
import { BadgeType } from 'src/app/core/models/Badge';
import { RouterLink } from '@angular/router';
import { BadgeListComponent } from '../../components/badge-list/badge-list.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    standalone: true,
    imports: [TitleComponent, BadgeListComponent, RouterLink]
})
export class DetailComponent implements OnInit {
  datas: BadgeType[] = [
    { datakey: 'Number of entries', datavalue: 3 },
    { datakey: 'Total number medals', datavalue: 5 },
    { datakey: 'Total number of countries', datavalue: 32 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
