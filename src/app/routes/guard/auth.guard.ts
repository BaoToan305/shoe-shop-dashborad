import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-config/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inject AuthService
  const router = inject(Router);            // Inject Router để điều hướng

  if (authService.getToken()) {
    return true; // Nếu có token, cho phép truy cập
  } else {
    router.navigate(['/login']); // Nếu không có token, chuyển hướng tới login
    return false;
  }
};
