import { EventEmitter, Output } from "@angular/core";

export class CommunicationService {
  serviceMethod(event) {
    console.log(`${event} called in service`);
  }

  @Output() statusUpdate = new EventEmitter<string[]>();
}
