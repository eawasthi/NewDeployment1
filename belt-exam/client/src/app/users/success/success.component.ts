import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { Trivia } from "app/users/playpage/trivia";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  newTrivia: Trivia = new Trivia();

  constructor(private _usersService: UsersService) { }


  ngOnInit() {
    this._usersService.answers(this.newTrivia)
  }

}
