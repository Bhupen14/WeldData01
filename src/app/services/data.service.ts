import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getToken } from '@angular/router/src/utils/preactivation';
// import { Server } from 'http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private myRoute:Router) { }
  sendToken(token : string)
  {
    // console.log(token['userID']);
    localStorage.setItem("userID",token['userID']);
    // localStorage.setItem("password",token['password']);
    
  }  
  getToken()
  {
    return localStorage.getItem("userID");
  }
  isLoggedIn()
  {
    if(this.getToken() == null)
    {
        console.log("Not Loged in");
    }
    else
    {
        return this.getToken();
    }
    // console.log(this.getToken());
    // return this.getToken() !== null;
 
  }
  logout()
  {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["Login"]);
  }
}
