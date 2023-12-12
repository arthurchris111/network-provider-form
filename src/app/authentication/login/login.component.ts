import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
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
  submittedDataArray: any[] = [];

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  // Form Initialization
  createForm() {
    this.login = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      network: new FormControl('', Validators.required),
      networks: this.formBuilder.array([]),
      // networks: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  // Form Controls
  get networks() {
    return this.login.get('networks') as FormArray;
  }

  get formControl(): any {
    return this.login.controls;
  }

  // generate network ID
  generateNetworkId(): string {
    return 'id_' + Math.random().toString(36).substring(2, 9);
  }

  // Network Form Group Creation
  createNetwork() {
    return this.formBuilder.group({
      networks: new FormControl('', Validators.required),
      id: this.generateNetworkId(),
      name: this.login.value.networks,
    });
  }

  // add network input field
  addNetwork() {
    const newInput = this.formBuilder.control('', Validators.required);
    this.networks.push(newInput);
    // this.networks.push(this.createNetwork());
  }

  // remove network input field
  removeNetwork(index: number) {
    this.networks.removeAt(index);
  }

  // Form Submission
  onSubmit() {
    this.submitted = true;
    if (this.login.valid) {
      const formData = {
        name: this.login.value.name,
        network: [
          {
            id: this.generateNetworkId(),
            name: this.login.value.networks,
          },
        ],
      };
      this.submittedDataArray.push(formData);
      console.log(formData);
      console.log(this.submittedDataArray);
    } else {
      console.log('==================>invalid');
    }
  }
}
