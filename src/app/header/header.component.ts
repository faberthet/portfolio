import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  active:string=""
  headerTop:string=""




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navToTop(){
    this.headerTop="header-top"
  }
  navToMiddle(){
    this.headerTop=""
  }

}
