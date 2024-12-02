import { HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../auth/auth-service/auth.service";
import { catchError, switchMap, throwError } from "rxjs";

let isRefreshing = false;

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const token = authService.token;

  if (!token) return next(req); // только первый запрос на получение токена отсылается без Authorization: Bearer

  if (isRefreshing) {
    return refreshAndProceed(authService, req, next) // не дожидаясь ошибки, отправляем запрос на рефреш
  }

  return next(setTokenHeader(req, token))
  .pipe(
    catchError(error => {
      if (error.status === 403) {
        console.log(error);
        
        return refreshAndProceed(authService, req, next)
      }
      return throwError(() => error);
    })
  )
}

const refreshAndProceed = (
  authService: AuthService,
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  if (!isRefreshing) {
    isRefreshing = true;

    return authService.refreshTokenUpdate()
    .pipe(
      switchMap((newToken) => {
        isRefreshing = false;
        return next(setTokenHeader(req, newToken.access_token))
    }))
  }

  return next(setTokenHeader(req, authService.token!)) // если кто-то залётный
}

const setTokenHeader = (req: HttpRequest<any>, token: string) => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}