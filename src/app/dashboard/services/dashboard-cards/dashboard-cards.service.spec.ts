import {inject, TestBed} from '@angular/core/testing';

import {DashboardCardsService} from './dashboard-cards.service';

describe('DashboardCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardCardsService]
    });
  });

  it('should be created', inject([DashboardCardsService], (service: DashboardCardsService) => {
    expect(service).toBeTruthy();
  }));
});
