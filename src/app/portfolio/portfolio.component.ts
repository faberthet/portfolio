import { Component, OnInit } from '@angular/core';
import { Techno } from '../models/techno';
import { Project } from '../models/project';
import { Projects } from '../data/portfolioData';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  show:string=""

  projects: Project[]=Projects;
  selectedTechno="all";

  allFilter:string="filter-active";
  angularFilter:string="";
  csharpFilter:string="";
  javaFilter:string="";

  constructor() {}
  
  ngOnInit(): void {

    console.log()
    setTimeout(() => {
      this.show="section-show"        
    }, 350);
    
  }

 

  filter(techno:string):void{
    this.selectedTechno=techno;
    if(techno=="all"){
      this.activeAll();
    }
    if(techno=="angular"){
      this.activeAngular();
    }
    if(techno=="c#"){
      this.activeCsharp();
    }
    if(techno=="java"){
      this.activeJava();
    }
  }

  //utiliser un tableau clé/valeur pour un code moins redondant
 
  activeAll():void{
    this.angularFilter=""
    this.csharpFilter=""
    this.javaFilter=""
    this.allFilter="filter-active"
  }
  activeAngular():void{
    this.angularFilter="filter-active"
    this.csharpFilter=""
    this.javaFilter=""
    this.allFilter=""
  }
  activeCsharp():void{
    this.angularFilter=""
    this.csharpFilter="filter-active"
    this.javaFilter=""
    this.allFilter=""
  }
  activeJava():void{
    this.angularFilter=""
    this.csharpFilter=""
    this.javaFilter="filter-active"
    this.allFilter=""
  }

}
