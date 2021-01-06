import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-new-practise",
  templateUrl: "./new-practise.component.html",
  styleUrls: ["./new-practise.component.css"],
})
export class NewPractiseComponent implements OnInit {
  @Input() element: boolean;
  constructor() {}

  ngOnInit() {
    console.log(this.element + " in new practise");
  }
}
