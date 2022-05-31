import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalideLinkComponent } from './invalide-link.component';

describe('InvalideLinkComponent', () => {
  let component: InvalideLinkComponent;
  let fixture: ComponentFixture<InvalideLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalideLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
