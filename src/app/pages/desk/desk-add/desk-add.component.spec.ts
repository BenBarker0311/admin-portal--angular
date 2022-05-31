import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskAddComponent } from './desk-add.component';

describe('DeskAddComponent', () => {
  let component: DeskAddComponent;
  let fixture: ComponentFixture<DeskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
