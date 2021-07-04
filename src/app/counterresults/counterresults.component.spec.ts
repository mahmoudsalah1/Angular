import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterresultsComponent } from './counterresults.component';

describe('CounterresultsComponent', () => {
  let component: CounterresultsComponent;
  let fixture: ComponentFixture<CounterresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
