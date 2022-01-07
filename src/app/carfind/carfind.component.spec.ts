import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarfindComponent } from './carfind.component';

describe('CarfindComponent', () => {
  let component: CarfindComponent;
  let fixture: ComponentFixture<CarfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarfindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
