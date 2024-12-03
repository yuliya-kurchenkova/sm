import { inject } from "@angular/core"
import { AuthService } from "../auth/auth-service/auth.service"
import { Router } from "@angular/router";

export const canActivateAuth = () => {
  const isLoggedIn = inject(AuthService).isAuth;

  if (isLoggedIn) {
    return true; // если токен существует, то пользователь авторизован и может переходить на другие страницы  
  }

  return inject(Router).navigate(['login']);
}