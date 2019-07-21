import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements AfterViewInit {

  @Input('appHover') color;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.color = this.color ? this.color : 'red';
  }

  @HostListener('mouseenter') hoverOn() {
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') hoverOff() {
    this.changeColor('black');
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }


}
