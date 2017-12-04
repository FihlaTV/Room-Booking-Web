import { TestBed, inject } from '@angular/core/testing';

import { FirebaseAuthenticationService } from './firebase-authentication.service';

describe('FirebaseAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseAuthenticationService]
    });
  });

  it('should be created', inject([FirebaseAuthenticationService], (service: FirebaseAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
