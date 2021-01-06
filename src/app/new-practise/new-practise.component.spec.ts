import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPractiseComponent } from './new-practise.component';

describe('NewPractiseComponent', () => {
  let component: NewPractiseComponent;
  let fixture: ComponentFixture<NewPractiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPractiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
