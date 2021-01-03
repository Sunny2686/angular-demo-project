import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { PracticalComponent } from '../practical/practical.component';
import { InteractionService } from '../interaction.service';
import { FormGroup, FormControl } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit, AfterViewInit {

  constructor(private intercat: InteractionService) {
  }

  @ViewChild('btn', {static: false}) button: ElementRef;
  input = document.querySelectorAll('input');
  component: PracticalComponent;
  profileForm: FormGroup;
  formClick: Subscription;



  ngOnInit() {

      this.profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl('')
        })
      });



    }


 ngAfterViewInit() {

  this.formClick =  fromEvent( this.button.nativeElement , 'click')
  .pipe(
    debounceTime(500),
   // distinctUntilChanged()
  )
  .subscribe(val => {
    console.log(this.profileForm.value);
  });



 }
// onSubmit() {
//   console.log(this.profileForm.value);
// }



  }






