import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ProfileSummary, Test_Account } from '../../interfaces/account.interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course';

  me = signal<Test_Account | null>(null);

  getTestAccounts() {
    return this.http.get<Test_Account[]>(`${this.baseUrl}/account/test_accounts`)
  }

  getSubscribersShortList() {
    return this.http.get<ProfileSummary<Test_Account>>(`${this.baseUrl}/account/subscribers/`)
      .pipe(
        map(res => res.items.slice(0, 3)) // вернули в ответе только 3 первых items
      )
  }

  getMeAccount() {
    return this.http.get<Test_Account>(`${this.baseUrl}/account/me`)
      .pipe(
        tap((res) => this.me.set(res))
      )
  }
}

