import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  contactForm!: FormGroup;
  constructor(private http: HttpClient) {}
  contactUs() {
    return this.http.post(`${environment.apiUrl}`, this.contactForm.value, {
      observe: 'response',
    });
  }
}
