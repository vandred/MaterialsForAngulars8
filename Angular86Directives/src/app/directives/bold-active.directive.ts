import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

// HostListener
@Directive({
  selector: '[appBoldActive]'
})
export class BoldActiveDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseclick')
  onMouseEnter() {
    this.setFontWeight('bold');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setFontWeight('normal');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  }
}
