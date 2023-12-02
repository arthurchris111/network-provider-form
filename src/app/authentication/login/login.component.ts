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
  submitted: boolean = false;
  isFetching: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  buildLoginForm(): void {
    this.login = this.formBuilder.group({
      country: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.login;
    this.buildLoginForm();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.login.value);
  }
}
