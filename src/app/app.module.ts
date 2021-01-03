import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { RevisionComponent } from './revision.component';
import { PractiseComponent } from './practise/practise.component';
import { PracticalComponent } from './practical/practical.component';
import { PractiseDirective } from './shared/practise.directive';
import { PracComponent } from './prac/prac.component';



const appRoute: Routes = [
                           {path: 'home', component: AppComponent, data: {animation: 'home'}},
                           {path: 'practise', component: PractiseComponent, data: {animation: 'practise'}},
                           {path: 'practical', component: PracticalComponent, data: {animation: 'practical'}},
                           {path: 'revision', component: RevisionComponent, data: {animation: 'revision'}}
];



@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    RevisionComponent,
    PractiseComponent,
    PracticalComponent,
    PractiseDirective,
    PracComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
