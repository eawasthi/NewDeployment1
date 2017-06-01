import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
   this._usersService.get_results()
  }

  canceling(){
    this._usersService.canceling()
  }

}
