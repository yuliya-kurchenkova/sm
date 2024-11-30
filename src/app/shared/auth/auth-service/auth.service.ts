import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginBody, TokenResponse } from '../../interfaces/auth.interface';
import { tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  cookieService = inject(CookieService);
  baseUrl = 'https://icherniakov.ru/yt-course/auth';

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = this.cookieService.get('token'); // Получение токена из куков на случай перезагрузки страницы
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
        this.token = val.access_token;
        this.refreshToken = val.refresh_token;

        this.cookieService.set('token', this.token);
        this.cookieService.set('refreshToken', this.refreshToken);
      })
    )
  }
}
