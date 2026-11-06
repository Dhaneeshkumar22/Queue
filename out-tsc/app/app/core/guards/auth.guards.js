import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs';
export const authGuard = (_route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);
    return auth.isAuthenticated() ? true : auth.restoreSession().pipe(map(ready => ready ? true : router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })));
};
export const roleGuard = (roles) => () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    return auth.isAuthenticated() ? auth.hasRole(roles) ? true : router.createUrlTree(['/forbidden']) : auth.restoreSession().pipe(map(ready => !ready ? router.createUrlTree(['/login']) : auth.hasRole(roles) ? true : router.createUrlTree(['/forbidden'])));
};
