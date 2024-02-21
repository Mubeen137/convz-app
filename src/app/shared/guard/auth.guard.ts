import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  return auth.loginStatus$.pipe(
    map((status: boolean) => {
      console.log(status);
      
      if(!status){
        router.navigateByUrl('/');
        return false;
      } return true;
    })
  )
};
