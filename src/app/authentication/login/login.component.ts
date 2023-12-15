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
  sampleForm: FormGroup = new FormGroup({});
  submittedDataArray: any[] = [];

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  // Form Initialization
  createForm() {
    this.sampleForm = this.formBuilder.group({
      name: ['', Validators.required],
      networks: this.formBuilder.array([]),
    });
    this.addNetwork();
  }

  // Form Controls
  get networks() {
    return this.sampleForm.get('networks') as FormArray;
  }

  get formControl(): any {
    return this.sampleForm.controls;
  }

  // generate network ID
  generateNetworkId(): string {
    return 'id_' + Math.random().toString(36).substring(2, 9);
  }

  // add network input field
  addNetwork() {
    this.networks.push(
      this.formBuilder.group({
        id: [this.generateNetworkId()],
        name: ['', Validators.required],
      })
    );
  }

  // remove network input field
  removeNetwork(index: number) {
    this.networks.removeAt(index);
  }

  // Form Submission
  onSubmit() {
    this.submitted = true;
    if (this.sampleForm.valid) {
      console.log(this.sampleForm.value);
    } else {
      console.log('==================>invalid');
    }
  }
}
