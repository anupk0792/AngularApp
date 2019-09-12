import { Component, OnInit } from '@angular/core';
import { AppuserService } from '../appuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public homeMembers = [];

  constructor(private _appservice: AppuserService) { }

  ngOnInit() {
    this.homeMembers = this._appservice.getHomeMembers();
  }

}
