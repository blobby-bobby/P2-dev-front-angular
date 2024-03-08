import { Component, Input, OnInit } from '@angular/core';
import { BadgeType } from 'src/app/core/models/Badge';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss'],
})
export class BadgeListComponent implements OnInit {
  @Input() datas: BadgeType[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
