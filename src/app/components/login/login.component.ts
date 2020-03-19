import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public  router:  Router) { }

  ngOnInit(): void {
    let x = localStorage.getItem("user");
    if(x != 'null'){
      this.router.navigate(['profile']);
    }else{
      this.router.navigate(['login']);
      
    }
  }

}
