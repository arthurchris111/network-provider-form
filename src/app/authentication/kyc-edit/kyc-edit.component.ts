import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EditKycService } from './edit-kyc.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kyc-edit',
  templateUrl: './kyc-edit.component.html',
  styleUrls: ['./kyc-edit.component.scss'],
})
export class KycEditComponent {
  submitted: boolean = false;
  kycEditForm!: FormGroup;
  responses: any;

  constructor(
    private editKycService: EditKycService,
    private formBuilder: FormBuilder
  ) {
    this.editKycService.getT().subscribe();
    this.editKycService.getOne('40').subscribe();
  }

  ngOnInit(): void {
    this.buildKycEditForm();
  }

  buildKycEditForm(): void {
    this.kycEditForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      bvn: ['', Validators.required],
      vnin: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      street_line_one: ['', Validators.required],
      street_line_two: ['', Validators.required],
      postal_code: ['', Validators.required],
      selfie: ['', Validators.required],
      photo_id_back: ['', Validators.required],
      document_type: ['', Validators.required],
      document_number: ['', Validators.required],
      politically_exposed_person: [false, Validators.required],
    });

    this.loadData();
  }

  get formControl(): any {
    return this.kycEditForm.controls;
  }

  loadData(): void {
    this.editKycService.getOne('40').subscribe(
      (data) => {
        this.responses = { ...data, ...data.user };
        console.error(this.responses.data);
        this.kycEditForm.patchValue(this.responses);
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.kycEditForm.valid) {
      const formData = this.kycEditForm.value;

      const dataId = this.responses.id;

      this.editKycService.putOne(dataId, formData).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
    }

    console.log(this.kycEditForm.value);
  }
}
