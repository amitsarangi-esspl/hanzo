import { Component, Input } from '@angular/core';
import { PieChart, PieChartData } from '../../../shared/PieChart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input() odersTobePicked: any = [];
  ngOnInit(): void {
    setTimeout(() => {

      this.loadPieChart();
    }, 1000);
  }
  loadPieChart() {
    new PieChart('#svgPieContainer', this.odersTobePicked, {chartType: 'pie', arcScalingEnable: true, arcScalingIndex: 0});
  }
}
