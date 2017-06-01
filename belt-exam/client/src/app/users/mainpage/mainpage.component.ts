import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  constructor(private _usersService: UsersService) { }
  

  search_string: string = ""

  ngOnInit() {
   this._usersService.loggedIn()
   this._usersService.get_users()
   this._usersService.get_results()
  }


}



  