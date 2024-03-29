import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true,
})
export class BadgeComponent implements OnInit {
  @Input() datakey!: string;
  @Input() datavalue!: string;

  /**
   * Initializes the component and assigns olympic service values to the datakey and datavalue properties if they are provided.
   *
   * @return {void}
   */
  ngOnInit(): void {
    if (this.datakey) {
      this.datakey = this.datakey;
    }
    if (this.datavalue) {
      this.datavalue = this.datavalue;
    }
  }
}
