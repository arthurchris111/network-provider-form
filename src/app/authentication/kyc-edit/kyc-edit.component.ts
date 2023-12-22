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
  kycEdit!: FormGroup;

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
    this.kycEdit = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      date_joined: ['', Validators.required],
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
      politically_exposed_person: ['', Validators.required],
      accept_terms: ['', Validators.required],
      accept_data_usage_policy: ['', Validators.required],
    });
  }

  onSubmit() {}
}
