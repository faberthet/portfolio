import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  showsection:boolean=false

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showSection(){
    this.showsection=!this.showsection
  }
 

}
