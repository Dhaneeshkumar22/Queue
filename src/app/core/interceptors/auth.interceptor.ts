import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService); const router = inject(Router);
  const token = sessionStorage.getItem('queueless.session');
  let bearer: string | undefined;
  try { bearer = token ? (JSON.parse(token) as { accessToken?: string }).accessToken : undefined; } catch { bearer = undefined; }
  let outgoing = request.url.startsWith(environment.apiBaseUrl) ? request.clone({ withCredentials: true }) : request;
  if (bearer) outgoing = outgoing.clone({ setHeaders: { Authorization: `Bearer ${bearer}` } });
  return next(outgoing).pipe(catchError(error => {
    if (error.status === 401) { auth.logout(); void router.navigate(['/login']); }
    else if (error.status === 403) { void router.navigate(['/forbidden']); }
    return throwError(() => error);
  }));
};
