import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myData:DataService, private myRoute:Router) { }

  ngOnInit() 
  {
  
  }
  login(loginData)
  {
    if((loginData['userID'] == null) || (loginData['password'] == null))
        // && (loginData['userID'] == null) && (loginData['password'] == null))
    {
        console.log("no data 1");
    }
    else if ((loginData['userID'] == null) !&& (loginData['password'] == null))
    {
      console.log("no data 2");
    }

    else
    {
      if((loginData['userID'] == 'Admin') && (loginData['password'] == 'Admin'))
      {
        this.myData.sendToken(loginData);
        this.myRoute.navigate(['/Home']);
      }
      else
      {
        console.log("no data 3");
      }
    }
  }
}
