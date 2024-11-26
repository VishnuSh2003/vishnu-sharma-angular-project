import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverColor]',
  standalone: true
})
export class HoverColorDirective {
  @Input() hoverColor: string = ''; // Color on hover
  @Input() defaultColor: string = ''; // Default color when not hovered
  @Input() isBackground: boolean = true; // Choose between background or text color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.hoverColor || 'lightblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(this.defaultColor || '');
  }

  private changeColor(color: string) {
    if (this.isBackground) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', color);
    }
  }
}
