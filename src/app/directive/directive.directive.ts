import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective implements OnInit{

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      this.renderer.setStyle(this.elref.nativeElement, 'color', 'white')
      this.renderer.setStyle(this.elref.nativeElement, 'font-size','2rem')
      this.renderer.setStyle(this.elref.nativeElement, 'text-align','center')
      this.renderer.setStyle(this.elref.nativeElement, 'margin-top','50px')

  }
}
