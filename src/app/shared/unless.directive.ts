import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective implements OnInit {
  // chage: boolean = false;
  @Input() defaultState: boolean;
  @HostBinding("style.visibility") visibility = 0;
  constructor(private elTRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}
}
