import { TestBed, inject } from '@angular/core/testing';

import { BackendService } from './backend.service';
import {HttpModule} from "@angular/http";

describe('BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [BackendService]
    });
  });

  it('should be created', inject([BackendService], (service: BackendService) => {
    expect(service).toBeTruthy();
  }));
});
