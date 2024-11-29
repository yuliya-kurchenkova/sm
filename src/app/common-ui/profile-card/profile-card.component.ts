import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test_Account } from '../../shared/interfaces/account.interface';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: Test_Account;
}