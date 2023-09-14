import { Component, OnInit } from '@angular/core';
import { Techno } from '../models/techno';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  show:string=""

  /**
   *
   */
  constructor() {
   // testeu();
    
  }
  
  ngOnInit(): void {

    console.log()
    setTimeout(() => {
      this.show="section-show"        
    }, 350);
    
  }
 


}
