import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

show:string=""
form: FormGroup = this.fb.group({
  name:'',
  email:'',
  subject:'',
  message:''
})

constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show="section-show"        
    }, 200);
  }

 async send(){
  emailjs.init("RgCf7FP1ygu6TP9ac")
  let response = await emailjs.send("service_o6j39qh","template_v6ql0ha",{
    name: this.form.value.name,
    email: this.form.value.email,
    subject: this.form.value.subject,
    message: this.form.value.message,
    });
    alert('votre message a été envoyé')
    this.form.reset();
  }
  

}
