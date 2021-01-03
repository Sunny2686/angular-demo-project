import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPractise]'
})
export class PractiseDirective implements OnInit {
  @Input() addAttriute;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { 
    
  }


  ngOnInit() {  }

}
