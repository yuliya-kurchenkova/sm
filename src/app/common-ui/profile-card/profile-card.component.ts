import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test_Account } from '../../shared/interfaces/account.interface';
import { ImgUrlPipe } from "../../shared/pipes/img-url/img-url.pipe";

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: Test_Account;
}