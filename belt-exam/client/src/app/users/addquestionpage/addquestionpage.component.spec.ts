import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionpageComponent } from './addquestionpage.component';

describe('AddquestionpageComponent', () => {
  let component: AddquestionpageComponent;
  let fixture: ComponentFixture<AddquestionpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquestionpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
