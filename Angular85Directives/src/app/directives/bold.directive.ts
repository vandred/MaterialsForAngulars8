import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {
  constructor(private elementRef: ElementRef) {
    console.log('appBold', this.elementRef);
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
