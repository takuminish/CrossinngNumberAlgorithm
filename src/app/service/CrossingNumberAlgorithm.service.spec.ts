/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrossingNumberAlgorithmService } from './CrossingNumberAlgorithm.service';

describe('Service: CrossingNumberAlgorithm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrossingNumberAlgorithmService]
    });
  });

  it('should ...', inject([CrossingNumberAlgorithmService], (service: CrossingNumberAlgorithmService) => {
    expect(service).toBeTruthy();
  }));
});
