import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/bar/pages/auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const authService = inject(AuthService);

  const isAuth = authService.verifyToken() 

  return isAuth || router.createUrlTree(['auth'])
  // return router.createUrlTree(['auth'])
};
