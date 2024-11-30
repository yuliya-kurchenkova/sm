import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginBody } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/auth';

  login(body: LoginBody) {
    return this.http.post(`${this.baseUrl}/token`, body)
  }
}
