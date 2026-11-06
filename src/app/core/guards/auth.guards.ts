import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserRole } from '../models/api.models';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthService); const router = inject(Router);
  return auth.isAuthenticated() ? true : auth.restoreSession().pipe(map(ready => ready ? true : router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })));
};
export const roleGuard = (roles: UserRole[]): CanActivateFn => () => {
  const auth = inject(AuthService); const router = inject(Router);
  return auth.isAuthenticated() ? auth.hasRole(roles) ? true : router.createUrlTree(['/forbidden']) : auth.restoreSession().pipe(map(ready => !ready ? router.createUrlTree(['/login']) : auth.hasRole(roles) ? true : router.createUrlTree(['/forbidden'])));
};
