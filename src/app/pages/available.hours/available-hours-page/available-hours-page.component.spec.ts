import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableHoursPageComponent } from './available-hours-page.component';

describe('AvailableHoursPageComponent', () => {
  let component: AvailableHoursPageComponent;
  let fixture: ComponentFixture<AvailableHoursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableHoursPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableHoursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
