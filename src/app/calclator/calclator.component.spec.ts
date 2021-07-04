import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalclatorComponent } from './calclator.component';

describe('CalclatorComponent', () => {
  let component: CalclatorComponent;
  let fixture: ComponentFixture<CalclatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalclatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalclatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
