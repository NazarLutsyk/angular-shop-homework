import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('style.backgroundColor') bg;

  @HostListener('mouseenter', ['$event']) hover($event) {
    this.bg = 'grey';
  }

  @HostListener('mouseleave', ['$event']) unHover($event) {
    this.bg = 'white';
  }
}
