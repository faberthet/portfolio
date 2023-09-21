import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  active:string=""
  headerTop:string=""

  url:string=""
  navbarStatut=""
 
  faGithub=faGithub

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe( event => this.headerPosition() )
  }
  
  headerPosition(){
     this.url=this.router.url
     var page=this.url.split('/').pop();
    //  console.log(page)
     if(page!=""){
      this.headerTop="header-top"
     }else{
      this.headerTop=""
     }
  }

  toggleNav(){
    if(this.navbarStatut==""){
      this.navbarStatut="navbar-mobile";
    }else{
      this.navbarStatut="";
    }
  }

  hideNav(){
    this.navbarStatut="";
  }
 
}
