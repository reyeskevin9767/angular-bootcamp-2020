import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  // Make a directive that responds to a property set on it
  @Input() set appClass(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
