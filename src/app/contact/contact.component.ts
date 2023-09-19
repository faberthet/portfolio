import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

show:string=""

  ngOnInit(): void {
    setTimeout(() => {
      this.show="section-show"        
    }, 200);
  }

  

}
