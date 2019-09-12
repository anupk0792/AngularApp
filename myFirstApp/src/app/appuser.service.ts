import { Injectable } from '@angular/core';

@Injectable()
export class AppuserService {

  constructor() { }

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

  getUserList(){
    return [
      {
        "userid":1, "name":"User1", "age":26
      },
      {
        "userid":2, "name":"User2", "age":22
      }
     ];
  }

}
