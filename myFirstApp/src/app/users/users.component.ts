import { Component, OnInit } from '@angular/core';
import { AppuserService } from '../appuser.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList = [];

  constructor(private _userlist: AppuserService) { }

  ngOnInit() {
    this._userlist.getUserList()
    .subscribe(data =>{
      this.userList = data;
      console.log(this.userList);
    } );

   
  }

}
