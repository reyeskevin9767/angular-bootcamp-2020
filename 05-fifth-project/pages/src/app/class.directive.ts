import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @Input() backgroundColor: string;

  constructor(private element: ElementRef) {
    // Never Do This
    setTimeout(() => {
      this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    }, 50);
  }
}
