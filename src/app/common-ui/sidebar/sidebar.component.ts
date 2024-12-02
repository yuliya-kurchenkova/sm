import { Component } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { link } from 'fs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent { 
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
