import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''), // The initial value can be provided as an argument
      password: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }
}
