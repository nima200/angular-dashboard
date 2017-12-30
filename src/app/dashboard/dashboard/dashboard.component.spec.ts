import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardfComponent} from './dashboard.component';

describe('DashboardfComponent', () => {
  let component: DashboardfComponent;
  let fixture: ComponentFixture<DashboardfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardfComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
