import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';
  user = {
    email: '',
    subscriptions: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscriptions = this.signupForm.value.userData.subscriptions;
    this.user.password = this.signupForm.value.userData.password;

    this.signupForm.reset();
  }
}
