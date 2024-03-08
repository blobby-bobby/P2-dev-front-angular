import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() datakey!: string;
  @Input() datavalue!: string;

  constructor() { }

  ngOnInit(): void {
    if (this.datakey) {
      this.datakey = this.datakey;
    }
    if (this.datavalue) {
      this.datavalue = this.datavalue;
    }
  }

}
