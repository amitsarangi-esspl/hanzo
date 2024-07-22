import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDashboardComponent } from './historical-dashboard.component';

describe('HistoricalDashboardComponent', () => {
  let component: HistoricalDashboardComponent;
  let fixture: ComponentFixture<HistoricalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricalDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
