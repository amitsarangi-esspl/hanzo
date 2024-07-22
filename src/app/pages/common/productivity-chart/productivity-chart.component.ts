import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-productivity-chart',
  templateUrl: './productivity-chart.component.html',
  styleUrl: './productivity-chart.component.scss'
})
export class ProductivityChartComponent {
  @Input() productivityData: any = [];
  productivityRecords:any=[]
  constructor(){

  }

  ngOnInit(): void {
    this.sortProductivityData([...this.productivityData]);

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productivityData']) {
      this.sortProductivityData([...changes['productivityData'].currentValue]);
    }

  }
  calculatePercent(quantityPicked:any, expectedQtytoBePicked:any){
    return  Math.round( (100 * quantityPicked) / expectedQtytoBePicked);
  }
  getProductivityPosition(index:number){
    let postion=index+1;
    switch (postion) {
      case 1:
       return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      default:
        return postion;
    }

  }
  getAvtarClass(index:number){
    switch (index) {
      case 0:
       return 'gold-avatar position-relative';
      case 1:
        return 'silver-avatar position-relative';
      case 2:
        return 'bronze-avatar position-relative';
      default:
        return 'bronze-avatar';
    }
    }
    sortProductivityData(data:any){

      this.productivityRecords= data.sort((a, b) => {
        return b.quantityPicked - a.quantityPicked
      });
    }
}
