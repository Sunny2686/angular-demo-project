import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { interval, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { slideInAnimation } from "./animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  change = true;
  state = "normal";
  images = [
    "Ravi",
    "Shashi",
    "Saurav",
    "Suman",
    "Anjani",
    "Anjali",
    "Binod",
    "Saraswati",
    "Anil kumar ratnesh",
  ];
  private customSubscribtion: Subscription;
  constructor() {}
  ngOnInit(): void {
    const customInterval = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 4) observer.complete();
        if (count > 5) observer.error(new Error("Number exceeded six"));
        count++;
      }, 1000);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  ngOnDestroy() {
    this.customSubscribtion.unsubscribe();
  }
}
