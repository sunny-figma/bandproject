import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from  "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Output() loginOrLogout  = new EventEmitter<boolean>();
  
  constructor(public  router:  Router) { }

  ngOnInit(): void {
    let x = localStorage.getItem("user");
    if(x != 'null'){
      this.router.navigate(['profile']);
    }else{
      this.router.navigate(['login']);
      
    }
  }

userLogout(){
  localStorage.setItem("user", null);
  this.loginOrLogout.emit(false)
  this.router.navigate(['login']);
}


}
