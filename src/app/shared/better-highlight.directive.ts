import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  constructor(private rendered: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.rendered.setStyle(
      this.elementRef.nativeElement,
      "color",
      this.defaultColor
    );
  }
  @HostListener("mouseover") mouseOver(event: Event) {
    this.rendered.setStyle(
      this.elementRef.nativeElement,
      "color",
      this.defaultColor
    );
    console.log(event);
    this.defaultColor = "yellow";
  }
  @HostListener("mouseleave") mouseLeave() {
    this.rendered.setStyle(this.elementRef.nativeElement, "color", "#337ab7");
  }
}
