import { TestBed } from '@angular/core/testing';

import { TempleManagmentServiceService } from './temple-managment-service.service';

describe('TempleManagmentServiceService', () => {
  let service: TempleManagmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempleManagmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
