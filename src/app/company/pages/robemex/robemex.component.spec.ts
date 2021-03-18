import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobemexComponent } from './robemex.component';

describe('RobemexComponent', () => {
  let component: RobemexComponent;
  let fixture: ComponentFixture<RobemexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobemexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobemexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
