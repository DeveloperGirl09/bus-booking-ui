import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleBusDetailsComponent } from './view-single-bus-details.component';

describe('ViewSingleBusDetailsComponent', () => {
  let component: ViewSingleBusDetailsComponent;
  let fixture: ComponentFixture<ViewSingleBusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleBusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
