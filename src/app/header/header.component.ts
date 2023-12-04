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
  isInit:boolean=false

  sections:{name:string,cssStatut:string}[]=[
    {name:"home",cssStatut:"active"},
    {name:"portfolio",cssStatut:""},
    {name:"contact",cssStatut:""},
  ]

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe( event => this.headerPosition() )
    this.isInit=true
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

  onClick(name:string){
    this.hideNav()
    this.activateLink(name)
  }
  hideNav(){
    this.navbarStatut="";
  }
  activateLink(name:string){
    for(var i=0;i<this.sections.length; i++){
      if(this.sections[i].name!=name){
        this.sections[i].cssStatut="";
      }else{
        this.sections[i].cssStatut="active";
      }
    }
  }
  
 
}
