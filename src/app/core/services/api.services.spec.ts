import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { QueueService } from './api.services';

describe('QueueLess API services', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    sessionStorage.clear();
  });

  it('stores an access token in session storage after login', () => {
    const auth = TestBed.inject(AuthService);
    let signedIn = false;
    auth.login({ email: 'visitor@example.com', password: 'Passw0rd!' }).subscribe(() => signedIn = true);
    const request = http.expectOne('http://localhost:8080/api/auth/login');
    expect(request.request.method).toBe('POST');
    expect(request.request.withCredentials).toBe(true);
    request.flush({ accessToken: 'test-token', user: { id: 'u1', fullName: 'Visitor', email: 'visitor@example.com', role: 'CUSTOMER' } });
    expect(signedIn).toBe(true);
    expect(auth.user()?.email).toBe('visitor@example.com');
    expect(sessionStorage.getItem('queueless.session')).toContain('test-token');
  });

  it('submits a queue join request and returns the generated token response', () => {
    const queues = TestBed.inject(QueueService);
    let tokenNumber = '';
    queues.join('service-1').subscribe(token => tokenNumber = token.tokenNumber);
    const request = http.expectOne('http://localhost:8080/api/queues/join');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({ serviceId: 'service-1' });
    request.flush({ id: 'token-1', tokenNumber: 'A12', position: 3, peopleAhead: 2, estimatedWaitMinutes: 8, status: 'WAITING', serviceName: 'Consultation', branchName: 'Central', joinedAt: '2026-01-01T10:00:00Z' });
    expect(tokenNumber).toBe('A12');
  });
});
