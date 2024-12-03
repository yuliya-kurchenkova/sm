import { Component, inject } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { link } from 'fs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubscriberCardComponent } from "../subscriber-card/subscriber-card.component";
import { ProfileService } from '../../shared/services/profile/profile.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIconComponent, 
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    SubscriberCardComponent,
    AsyncPipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent { 
  profileService = inject(ProfileService);

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

}
