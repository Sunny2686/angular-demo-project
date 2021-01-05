import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  forkJoin,
  timer,
  interval,
  Observable,
  of,
  Subscription,
  fromEvent,
  from,
  throwError,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  catchError,
  concatMap,
  delay,
  map,
  mergeAll,
  mergeMap,
  tap,
  timestamp,
} from "rxjs/operators";
import { slideInAnimation } from "./animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild("navElement", { static: true }) navElement: ElementRef;
  inputItem = "ravi sshekhar";
  isTrue = true;
  classToAdd: boolean = true;
  change = false;
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
  navLinks: string[] = ["Practise", "Practicle", "Revision"];
  division: string = "PRACTISE";
  private customSubscribtion: Subscription;
  constructor() {}

  ngOnInit(): void {
    // from([
    //   ajax.getJSON("https://api.github.com/users/microsoft").pipe(delay(6000)),
    //   ajax.getJSON("https://api.github.com/users/google").pipe(delay(4000)),
    //   ajax.getJSON("https://api.github.com/users").pipe(delay(2000)),
    // ])
    //   .pipe(concatMap((res) => res))
    //   .subscribe(console.log);
    // this.navElement.nativeElement.setAttribute(
    //   "style",
    //   "background-color: lightgreen; border-radius: 10px; padding: 20px"
    // );
    // console.log(this.navElement.nativeElement.attributes);
    // forkJoin([
    //   ajax
    //     .getJSON("https://api.github.com/users/microsoft")
    //     .pipe(tap(console.log), delay(2000)),
    //   ajax
    //     .getJSON("https://api.github.com/users/google")
    //     .pipe(tap(console.log)),
    //   ajax.getJSON("https://api.github.com/users").pipe(tap(console.log)),
    // ]);
    // ajax
    //   .getJSON("https://api.github.com/users/google")
    //   .pipe(
    //     catchError((error) => throwError(error.message)),
    //     delay(2000),
    //     tap((res) => console.log(res)),
    //     concatMap((res1) =>
    //       ajax.getJSON("https://api.github.com/users/microsoft")
    //     ),
    //     catchError((error) => throwError(error.message)),
    //     delay(2000),
    //     tap((res) => console.log(res)),
    //     concatMap((res2) => ajax.getJSON("https://api.github.com/users")),
    //     delay(2000),
    //     catchError((error) => throwError(error.message))
    //   )
    //   .subscribe(console.log);
  }

  getServerStatus() {
    //return this.division;
    return this.change ? "pink" : "blue";
  }
  addClass() {
    let obj = {
      btn: this.classToAdd,
      hello: this.classToAdd,
    };
    return obj;
  }

  newFunc() {
    console.log("added new bracn");
  }
  onInputChange(event: Event) {
    //console.log((<HTMLInputElement>event.target).value);
    this.classToAdd = !this.classToAdd;
    this.change = !this.change;
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
} // End of class
