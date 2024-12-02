import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]', // ангуляр может вешать свои компоненты на нативные теги (если бы просто написали svg, то все теги svg заменялись бы на этот компонент), но тут прописано svg с аттрибутом icon
  imports: [],
  template: '<svg:use [attr.href]="href"></svg:use>',
  styles: ['']
})
export class SvgIconComponent {
  @Input() icon: string = '';

  get href() { // getter - чтобы вычислялась на лету 
    return `/assets/img/svg/${this.icon}.svg#${this.icon}`;
  }

}
