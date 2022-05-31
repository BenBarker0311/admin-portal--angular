import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskInputFormComponent } from './desk-input-form.component';

describe('DeskInputFormComponent', () => {
  let component: DeskInputFormComponent;
  let fixture: ComponentFixture<DeskInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
