import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailSender } from './email-sender';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http:HttpClient) { }

  postEmail(es:EmailSender){
    return this.http.post("http://localhost:8087/sendEmail",es);
  } 
}
