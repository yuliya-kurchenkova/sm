import { Component, inject, OnInit } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubscriberCardComponent } from "../subscriber-card/subscriber-card.component";
import { ProfileService } from '../../shared/services/profile/profile.service';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from "../../shared/pipes/img-url/img-url.pipe";

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIconComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SubscriberCardComponent,
    AsyncPipe,
    ImgUrlPipe
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  profileService = inject(ProfileService);

  me = this.profileService.me;
  subscribers$ = this.profileService.getSubscribersShortList();

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: ''
    }, {
      label: 'Чаты',
      icon: 'chats',
      link: '/chats'
    }, {
      label: 'Поиск',
      icon: 'search',
      link: '/search'
    }
  ];


  ngOnInit(): void {
    firstValueFrom(this.profileService.getMeAccount()) // используем промис вместо Observable, чтобы не отписываться, а в сервисе ответ сохранили в переменную me
  }

}
