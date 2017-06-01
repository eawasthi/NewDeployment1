import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { Trivia } from "app/users/playpage/trivia";

@Component({
  selector: 'app-playpage',
  templateUrl: './playpage.component.html',
  styleUrls: ['./playpage.component.css']
})
export class PlaypageComponent implements OnInit {
  newTrivia: Trivia = new Trivia();
  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    console.log("ngOnInit before lpgged in play")
    this._usersService.loggedIn()
    this._usersService.get_users()
    console.log("before play")
    this._usersService.play()
    console.log("after play")
  }

 answers(){
   this.newTrivia.question1Id=this._usersService.QUESTION[0]._id
   this.newTrivia.question2Id=this._usersService.QUESTION[1]._id
   this.newTrivia.question3Id=this._usersService.QUESTION[2]._id
   this.newTrivia.rightAnswer1=this._usersService.QUESTION[0].RightAnswer
   this.newTrivia.rightAnswer2=this._usersService.QUESTION[1].RightAnswer
   this.newTrivia.rightAnswer3=this._usersService.QUESTION[2].RightAnswer
   this._usersService.answers(this.newTrivia)
    this.newTrivia = new Trivia();
  }
}
