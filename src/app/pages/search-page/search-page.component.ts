import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";
import { Test_Account } from '../../shared/interfaces/account.interface';
import { ProfileService } from '../../shared/services/profile/profile.service';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService);
  profiles: Test_Account[] = []

  constructor() {
    this.profileService.getTestAccounts().subscribe(
      data => this.profiles = data
    )
  }
}
