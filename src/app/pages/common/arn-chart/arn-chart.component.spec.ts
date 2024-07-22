import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArnChartComponent } from './arn-chart.component';

describe('ArnChartComponent', () => {
  let component: ArnChartComponent;
  let fixture: ComponentFixture<ArnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArnChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
