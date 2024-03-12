import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  pieChartData = [
    { data: [30, 50, 20], label: 'Category 1' },
    { data: [15, 40, 45], label: 'Category 2' },
  ];
  pieChartOptions = {
    responsive: true,
  }; // Replace with your desired options
}
