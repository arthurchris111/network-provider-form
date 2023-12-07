import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  submitted: boolean = false;
  isFetching: boolean = false;
  login!: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  createForm() {
    this.login = this.formBuilder.group({
      name: ['', Validators.required],
      networks: this.formBuilder.array([]),
    });
  }

  get networks() {
    return this.login.get('networks') as FormArray;
  }

  addNetwork() {
    this.networks.push(this.formBuilder.control('', Validators.required));
  }

  removeNetwork(index: number) {
    this.networks.removeAt(index);
  }

  ngOnInit(): void {
    this.createForm();
  }

  get formControl(): any {
    return this.login.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.login.valid) {
      const formData = {
        name: this.login.value.name,
        network: [
          {
            id: this.login.value.networks,
            name: this.login.value.networks,
          },
        ],
      };

      console.log(formData);
    } else {
      console.log('==================>invalid');
    }
  }
}
