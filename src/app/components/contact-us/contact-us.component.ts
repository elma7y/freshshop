import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/service/contact-us.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnDestroy {
  contactFrom: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  contactSubscribtion!: Subscription;
  success: boolean;
  fail: boolean;
  constructor(private contactusService: ContactUsService) {
    this.success = false;
    this.fail = false;
  }
  submit() {
    this.contactusService.contactForm = this.contactFrom;
    this.contactSubscribtion = this.contactusService.contactUs().subscribe(
      (res) => {
        if (res.status == 200) {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 2000);
        }
      },
      (err) => {
        this.fail = true;
        setTimeout(() => {
          this.fail = false;
        }, 2000);
      }
    );
  }
  ngOnDestroy(): void {
    if (this.contactSubscribtion && this.contactSubscribtion.closed) {
      this.contactSubscribtion.unsubscribe();
    }
  }
}
