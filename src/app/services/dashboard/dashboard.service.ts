import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_URL='data/'

  constructor(private http: HttpClient) { }

  getDailyDashboardData(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}dashboard.data.json`);
  }
}
