import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/layouts/header/header.component';
import { FooterComponent } from './pages/layouts/footer/footer.component';
import { MenuComponent } from './pages/layouts/menu/menu.component';
import { MasterComponent } from './pages/layouts/master/master.component';
import { HistoricalDashboardComponent } from './pages/historical-dashboard/historical-dashboard.component';
import { ProductivityChartComponent } from './pages/common/productivity-chart/productivity-chart.component';
import { DonutChartComponent } from './pages/common/donut-chart/donut-chart.component';
import { PieChartComponent } from './pages/common/pie-chart/pie-chart.component';
import { ArnChartComponent } from './pages/common/arn-chart/arn-chart.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MasterComponent,
    HistoricalDashboardComponent,
    ProductivityChartComponent,
    DonutChartComponent,
    PieChartComponent,
    ArnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProgressSpinnerModule,
    DialogModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
