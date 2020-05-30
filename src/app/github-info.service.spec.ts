import { TestBed } from '@angular/core/testing';

import { GithubInfoService } from './github-info.service';

describe('GithubInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubInfoService = TestBed.get(GithubInfoService);
    expect(service).toBeTruthy();
  });
});
