import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./common-ui/profile-card/profile-card.component";
import { ProfileService } from './shared/services/profile/profile.service';
import { Test_Account } from './shared/interfaces/account.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileService = inject(ProfileService);
  profiles: Test_Account[] = []

  constructor() {
    this.profileService.getTestAccounts().subscribe(
      data => this.profiles = data
    )
  }
}
