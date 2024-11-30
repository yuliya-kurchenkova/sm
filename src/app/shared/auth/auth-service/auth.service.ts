import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginBody, TokenResponse } from '../../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/auth';

  token: string | null = null;
  refreshToken: string | null = null;

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
      })
    )
  }
}
