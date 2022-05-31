import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDeskComponent } from './no-desk.component';

describe('NoDeskComponent', () => {
  let component: NoDeskComponent;
  let fixture: ComponentFixture<NoDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
