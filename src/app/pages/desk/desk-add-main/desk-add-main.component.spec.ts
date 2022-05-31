import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskAddMainComponent } from './desk-add-main.component';

describe('DeskAddMainComponent', () => {
  let component: DeskAddMainComponent;
  let fixture: ComponentFixture<DeskAddMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskAddMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskAddMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
