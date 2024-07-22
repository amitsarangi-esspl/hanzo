import { Component } from '@angular/core';
import { PieChart, PieChartData } from '../../../shared/PieChart';
import {  Input } from '@angular/core'

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss'
})
export class DonutChartComponent {
  @Input() chartData: any = [];
  @Input() chartName: any = [];
  ngOnInit(): void {
   setTimeout(() => {
    this.loadDonutChart();
   }, 1000);

  }
  loadDonutChart() {
    const pieChartData: PieChartData[] = this.chartData;
    new PieChart(`#${this.chartName}`, pieChartData, {chartType: 'donut', innerRadius: 170});
  }
}
