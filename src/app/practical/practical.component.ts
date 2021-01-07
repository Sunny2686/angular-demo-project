import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Renderer2,
} from "@angular/core";
import { fromEvent, interval, Subscription, Observable } from "rxjs";
import { map, throttleTime } from "rxjs/operators";
import { slideInAnimation, translateAnimation } from "../animation";
import { InteractionService } from "../interaction.service";

@Component({
  selector: "app-practical",
  templateUrl: "./practical.component.html",
  styleUrls: ["./practical.component.css"],
  animations: [translateAnimation],
})
export class PracticalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("btn", { static: true }) btn: ElementRef;
  @ViewChild("c", { static: true }) ntn: ElementRef;
  start = false;
  cancel: Subscription;
  eventGoku = new Observable();

  inter = interval(1000);
  constructor(
    private renderer: Renderer2,
    private intercast: InteractionService
  ) {}

  ngOnInit() {
    this.cancel = this.inter
      .pipe(
        map((val) => {
          const valn = val + " Love";
          return valn;
        }),
        throttleTime(2000)
      )
      .subscribe({
        next: (val) => {
          console.log("Live is like a hurricane");
        },
      });
  }

  ngAfterViewInit() {
    this.eventGoku = fromEvent(this.btn.nativeElement, "click");
  }

  btnClick() {}

  ngOnDestroy() {
    this.cancel.unsubscribe();
  }
}
