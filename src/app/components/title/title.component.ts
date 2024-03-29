import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  standalone: true,
})
export class TitleComponent implements OnInit {
  @Input() pageTitle!: string;

  /**
   * Initializes the component after Angular has initialized and sets the page title if available.
   */
  ngOnInit(): void {
    if (this.pageTitle) {
      this.pageTitle = this.pageTitle;
    }
  }
}
