import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginBody, RefreshToken, TokenResponse } from '../../interfaces/auth.interface';
import { catchError, tap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  cookieService = inject(CookieService);
  baseUrl = 'https://icherniakov.ru/yt-course/auth';

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = this.cookieService.get('token'); // Получение токена из куков на случай перезагрузки страницы
      this.refreshToken = this.cookieService.get('refreshToken');
    }

    return !!this.token;  // Возвращает true, если токен существует
  }

  login(body: LoginBody) {
    const fd = new FormData();
    fd.append('username', body.username);
    fd.append('password', body.password);

    return this.http.post<TokenResponse>(`${this.baseUrl}/token`, fd)
    .pipe(
      tap(val => {
        console.log(val); // {access_token: "token", refresh_token: "token", token_type: "Bearer"}
        this.saveTokens(val)
      })
    )
  }

  refreshTokenUpdate() {
    return this.http.post<TokenResponse>(`${this.baseUrl}/refresh`, 
      {
        refresh_token: this.refreshToken
      }
    ).pipe(
      tap(val => { // сохраняем новый токен и сохраняем его в куки
        this.saveTokens(val)
        
      }),
      catchError(error => {
        this.logout()
        return throwError(() => error);
      })
    )
  }

  logout() {
    this.cookieService.deleteAll();
    this.token = null;
    this.refreshToken = null;
    this.router.navigate(['/login'])
  }

  saveTokens(res: TokenResponse) {
    this.token = res.access_token;
    this.refreshToken = res.refresh_token;

    this.cookieService.set('token', this.token);
    this.cookieService.set('refreshToken', this.refreshToken);
  }
}
