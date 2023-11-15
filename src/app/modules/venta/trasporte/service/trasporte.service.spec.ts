import { TestBed } from '@angular/core/testing';

import { TrasporteService } from './trasporte.service';

describe('TrasporteService', () => {
  let service: TrasporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrasporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
