import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAddToCartHighlight]',
  standalone: false
})
export class AddToCartHighlight {

  @Input() hoverScale: string = '1.05'; // how much to scale on hover
  @Input() hoverColor: string = '#ff9800'; // default e-commerce orange
  @Input() defaultColor: string = 'transparent';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Apply default styles
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.defaultColor}`);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.hoverScale})`);
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.hoverColor}`);
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', `0px 4px 15px rgba(0,0,0,0.2)`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.defaultColor}`);
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}

