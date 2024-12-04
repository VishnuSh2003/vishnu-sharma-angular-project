import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlightOnFocus]'
})
export class HighlightOnFocusDirective {
  @Input() highlightColor: string = 'lightblue'; // Default highlight color
  @Input() defaultColor: string = ''; // Optional default color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.applyHighlight(this.highlightColor);
  }

  @HostListener('blur') onBlur() {
    this.applyHighlight(this.defaultColor);
  }
  //
  private applyHighlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
