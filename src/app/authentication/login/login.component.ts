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

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.login = this.formBuilder.group({
      name: ['', Validators.required],
      network: ['', Validators.required],
    });
  }

  // buildLoginForm(): void {
  //   this.login = this.formBuilder.group({
  //     country: ['', [Validators.required]],
  //     password: ['', [Validators.required]],
  //   });
  // }

  get formControl(): any {
    return this.login.controls;
  }

  onSubmit() {
    if (this.login.valid) {
      const formData = {
        name: this.login.value.name,
        network: [
          {
            id: this.login.value.network.toLowerCase(),
            name: this.login.value.network.toUpperCase(),
          },
        ],
      };

      console.log(formData);
    } else {
      console.log('==================>invalid');
    }
  }
}
