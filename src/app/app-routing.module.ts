import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MasterComponent } from './pages/layouts/master/master.component';
import { HistoricalDashboardComponent } from './pages/historical-dashboard/historical-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {
     path : '',
     component : MasterComponent,
     children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'historical-dashboard', component: HistoricalDashboardComponent },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
