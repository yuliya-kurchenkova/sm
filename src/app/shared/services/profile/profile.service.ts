import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Test_Account } from '../../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course';

  getTestAccounts() {
    return this.http.get<Test_Account[]>(`${this.baseUrl}/account/test_accounts`)
  }

  getMeAccount() {
    return this.http.get<Test_Account>(`${this.baseUrl}/account/me`)
  }
}

