import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaypageComponent } from './playpage.component';

describe('PlaypageComponent', () => {
  let component: PlaypageComponent;
  let fixture: ComponentFixture<PlaypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
