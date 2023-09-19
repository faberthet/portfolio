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

  Technos:Techno[]=[
                    {name:"all",cssStatut:"filter-active"},
                    {name:"angular",cssStatut:""},
                    {name:"c#",cssStatut:""},
                    {name:"java",cssStatut:""}
                  ]

  constructor() {}
  
  ngOnInit(): void {

    setTimeout(() => {
      this.show="section-show"        
    }, 200);
    
  }

  filter(techno:string):void{
    this.selectedTechno=techno;
    
    for(var i=0;i<this.Technos.length; i++){
      if(this.Technos[i].name!=techno){
        this.Technos[i].cssStatut="";
      }else{
        this.Technos[i].cssStatut="filter-active";
      }
    }
  }

 
}
