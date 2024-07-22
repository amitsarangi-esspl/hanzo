import { ChangeDetectorRef, Component } from '@angular/core';
import { PieChart, PieChartData } from '../../shared/PieChart';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [DecimalPipe]
})
export class DashboardComponent {
  productivityData:[]=[];
  arnsData: PieChartData[] = [];
  ordersData: PieChartData[] = [];
  stockTransferData: PieChartData[] = [];
  odersTobePicked: PieChartData[] = [];
  constructor(
    private router: Router,
    private dashboardservice:DashboardService,
    private loader:SpinnerService,
    private decimalPipe:DecimalPipe
  ){

  }

  ngOnInit(): void {
    this.loader.show();

    Promise.all([
      this.getDashboardData(),
    ]).then(() => {
      setTimeout(() => {
        this.loader.hide();
      }, 1000);

    });


  }
  formatNumber(value: number): string {
    return this.decimalPipe.transform(value, '1.0-0'); // '1.0-0' formats the number with comma separation
  }
  getDashboardData(){
    this.dashboardservice.getDailyDashboardData().subscribe(
    (response) => {
      this.productivityData = response.productivityData;
      this.odersTobePicked=this.transformOdersTobePickedData(response.odersTobePicked);
      this.arnsData=this.transformarnsData(response.arnsData);
      this.ordersData=this.transformOrdersData(response.ordersData);
      this.stockTransferData=this.transformStockTransferData(response.stockTransferData);

    },
    (error) => {
      console.error('Error fetching data:', error);
    })
  }



  redirectToHistorical(){
      this.router.navigate(['/historical-dashboard'])
  }
  transformStockTransferData(data:any){
    const labelsAndColors = {
      "completed": { label: "Completed", color: "#e94e14" },
      "inProgress": { label: "In progress", color: "#ffa583" },
      "open": { label: "Open", color: "#a32b00" },
    };
    return this.formatDataForChart(data,labelsAndColors);
  }
  transformOrdersData(data:any){
    const labelsAndColors = {
      "unitTobeShipped": { label: "Units to be shipped", color: "#a32b00" },
      "unitShipped": { label: "Units Shipped", color: "#e94e14" },
    };
    return this.formatDataForChart(data,labelsAndColors);
  }
  transformarnsData(data:any){
    const labelsAndColors = {
      "completed": { label: "Completed", color: "#e94e14" },
      "inProgress": { label: "In progress", color: "#ffa583" },
      "toBeRecived": { label: "To be recieved", color: "#a32b00" },
    };
    return this.formatDataForChart(data,labelsAndColors);
  }
  transformOdersTobePickedData(data:any){

    const labelsAndColors = {
      "pickInProgress": { label: "Pick in progress", color: "#ffa583" },
      "completlyPicked": { label: "Completely picked", color: "#e94e14" }
    };
    return this.formatDataForChart(data,labelsAndColors);

  }
  formatDataForChart(data:any,labelsAndColors:any){
    let transformedData=Object.keys(data).map(key => (
      {
      label: labelsAndColors[key]?.label,
      value: data[key],
      color: labelsAndColors[key]?.color
    }
  ));

    return transformedData;

  }


}
