import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.elementref.nativeElement.style.backgroundColor = 'pink';
    this.renderer.setStyle(this.elementref.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseenter') mouseenter(event: Event) {
    this.renderer.setStyle(
      this.elementref.nativeElement,
      'background-color',
      'lightgreen'
    );
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    this.renderer.setStyle(this.elementref.nativeElement, 'font-size', '20px');
  }
}
