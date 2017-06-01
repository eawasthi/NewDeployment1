import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from "app/users/login/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: User = new User()
  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.loggedIn()
  }
  find(){
    this._usersService.find(this.newUser)
    this.newUser = new User()
  }
}
