import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { PracticalComponent } from "../practical/practical.component";
import { CommunicationService } from "../shared/communication.service";

@Component({
  selector: "app-new-practise",
  templateUrl: "./new-practise.component.html",
  styleUrls: ["./new-practise.component.css"],
  providers: [CommunicationService],
})
export class NewPractiseComponent implements OnInit {
  @Input("srvElement") element: boolean;
  @Output() serverCreated: EventEmitter<string[]> = new EventEmitter();
  @ViewChild("practical", { static: true }) practical: PracticalComponent;
  constructor(private communicationService: CommunicationService) {}
  send: string[] = ["ram", "shyam", "laxman", "bharat"];
  ngOnInit() {
    console.log(this.element + " in new practise");
  }

  output(event, refe: HTMLInputElement, prefe: HTMLElement) {
    this.serverCreated.emit(["Ram teri ganga mali.", "Ram teri  ganga pili"]);
    console.log(refe, prefe);
    prefe.classList.add("vegeta");
    //refe.disabled = true;
    this.communicationService.serviceMethod(event);
    this.communicationService.statusUpdate.emit(this.send);
  }
}
