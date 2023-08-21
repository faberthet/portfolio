import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  active:string=""
  headerTop:string=""


  navToTop(){
    this.headerTop="header-top"
  }
  navToMiddle(){
    this.headerTop=""
  }
}
