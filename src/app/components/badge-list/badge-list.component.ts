import { Component, Input, OnInit } from '@angular/core';
import { BadgeType } from 'src/app/core/models/Badge';
import { BadgeComponent } from '../badge/badge.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-badge-list',
    templateUrl: './badge-list.component.html',
    styleUrls: ['./badge-list.component.scss'],
    standalone: true,
    imports: [NgFor, BadgeComponent],
})
export class BadgeListComponent implements OnInit {
  @Input() datas: BadgeType[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
