import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailServiceService } from '../../email-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit {

  constructor(private fb:FormBuilder,private ess:EmailServiceService ){}
 
  emailRegForm: FormGroup;

  ngOnInit(): void {
    this.emailRegForm=this.fb.group({
        fromEmail:[''],
        toEmail:[''],
        subject:[''],
        textMessage:['']
    })
  }

  onSubmitEmail(){
    this.ess.postEmail(this.emailRegForm.value).subscribe();
    alert("email sent")
  }

}