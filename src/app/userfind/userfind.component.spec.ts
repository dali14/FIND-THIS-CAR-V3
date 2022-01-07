import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfindComponent } from './userfind.component';

describe('UserfindComponent', () => {
  let component: UserfindComponent;
  let fixture: ComponentFixture<UserfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
