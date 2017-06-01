import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { Question } from "app/users/addquestionpage/question";


@Component({
  selector: 'app-addquestionpage',
  templateUrl: './addquestionpage.component.html',
  styleUrls: ['./addquestionpage.component.css']
})
export class AddquestionpageComponent implements OnInit {
  questioncreate: Question = new Question()

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.loggedIn()
    this._usersService.newQuestion(this.questioncreate)
  }

  newQuestion(){
    console.log("this.questioncreate",this.questioncreate)
    this._usersService.newQuestion(this.questioncreate)
  }


  canceling(){
    this._usersService.canceling()
  }

}
