import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../auth/auth-service/auth.service";

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;

  if (!token) return next(req); // только первый запрос на получение токена отсылается без Authorization: Bearer
  
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  return next(req);
}