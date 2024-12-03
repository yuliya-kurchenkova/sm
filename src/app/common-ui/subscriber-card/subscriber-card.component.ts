import { Component, Input } from '@angular/core';
import { Test_Account } from '../../shared/interfaces/account.interface';
import { ImgUrlPipe } from "../../shared/pipes/img-url/img-url.pipe";

@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {
  @Input() profile!: Test_Account;
}
