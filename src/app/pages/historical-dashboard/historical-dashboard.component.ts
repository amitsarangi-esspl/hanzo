import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historical-dashboard',
  templateUrl: './historical-dashboard.component.html',
  styleUrl: './historical-dashboard.component.scss'
})
export class HistoricalDashboardComponent {
       constructor(
           private router:Router
       ){

       }
       ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

       }
       redirectToDailyDashboard(){
           this.router.navigate(['/dashboard']);
       }
}
