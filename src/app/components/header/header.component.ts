import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  displayLogin:boolean;

  constructor() { }

  ngOnInit(): void {
    
    let x = localStorage.getItem("user");
    if(x != 'null'){
      this.displayLogin = false;
    }else{
      this.displayLogin = true;
    }


    // localStorage.setItem("mytime", Date.now());


  }

  handleLogin(e : boolean){


    alert(e);
  }

}
