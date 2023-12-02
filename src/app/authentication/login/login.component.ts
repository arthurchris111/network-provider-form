import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login!: FormGroup;
  show: boolean = false;
  submitted: boolean = false;
  isFetching: boolean = false;
  user: boolean = false;
  password: any;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  buildLoginForm(): void {
    this.login = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.login;
    this.buildLoginForm();
    this.password = 'password';
  }

  togglePassword() {
    this.show = !this.show;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.login.value);
  }
}
