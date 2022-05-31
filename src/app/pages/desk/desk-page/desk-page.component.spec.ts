import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskPageComponent } from './desk-page.component';

describe('DeskPageComponent', () => {
  let component: DeskPageComponent;
  let fixture: ComponentFixture<DeskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
