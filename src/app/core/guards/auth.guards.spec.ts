import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { Router, RouterStateSnapshot, UrlTree, provideRouter } from '@angular/router';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { authGuard, roleGuard } from './auth.guards';

describe('QueueLess route guards', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])] }));

  it('redirects unauthenticated navigation to sign in and preserves the target URL', async () => {
    const state = { url: '/customer/join' } as RouterStateSnapshot;
    const result = TestBed.runInInjectionContext(() => authGuard({} as never, state));
    expect(result).not.toBe(true);
    if (typeof result !== 'boolean') {
      const check = firstValueFrom(result as Observable<boolean | UrlTree>);
      const request = TestBed.inject(HttpTestingController).expectOne('http://localhost:8080/api/auth/me');
      request.flush({}, { status: 401, statusText: 'Unauthorized' });
      const resolved = await check;
      if (resolved instanceof UrlTree) {
        const router = TestBed.inject(Router);
        expect(router.serializeUrl(resolved)).toContain('/login');
        expect(router.serializeUrl(resolved)).toContain('returnUrl');
        expect(router.serializeUrl(resolved)).toContain('customer');
      } else expect(resolved).toBe(false);
    }
  });

  it('does not grant role access without an authenticated session', async () => {
    const result = TestBed.runInInjectionContext(() => roleGuard(['MANAGER'])({} as never, {} as never));
    expect(result).not.toBe(true);
    if (typeof result !== 'boolean') {
      const check = firstValueFrom(result as Observable<boolean | UrlTree>);
      TestBed.inject(HttpTestingController).expectOne('http://localhost:8080/api/auth/me').flush({}, { status: 401, statusText: 'Unauthorized' });
      expect(await check).toBeInstanceOf(UrlTree);
    }
  });
});
