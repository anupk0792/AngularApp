import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './model';
import { Observable } from 'rxjs';

@Injectable()
export class AppuserService {

  constructor(private _http: HttpClient) { }
  private _url: string = 'https://jsonplaceholder.typicode.com/users';
  
  getHomeMembers(){
    return [
      {
        "id":1, "name":"Member1", "age":26
      },
      {
        "id":2, "name":"Member2", "age":22
      }
     ];
  }

  getUserList(): Observable<IUser[]>{
     return this._http.get<IUser[]>(this._url);
  }

}
