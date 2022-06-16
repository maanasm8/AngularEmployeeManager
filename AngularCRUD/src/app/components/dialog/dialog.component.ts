import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor() {}

  types: string[] = ['Intern', 'Part-time', 'Full-time', 'Contractor'];
  employeeType: string | null = null;
  employeeNameNgModelVar: string | null = null;

  ngOnInit(): void {}
  email_regex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  special_characters_regex = '/^[a-zA-Z0-9]*$/';
  phone_no_regex = '^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$';

  userEmails = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.email_regex),
    ]),
  });

  userNameFormGroup = new FormGroup({
    nameFromControl: new FormControl('', [Validators.required]),
  });

  userJobDescriptionFormGroup = new FormGroup({
    jobDescriptionFormControl: new FormControl('', [
      Validators.pattern(this.special_characters_regex),
    ]),
  });

  phoneNumberFormGroup = new FormGroup({
    phoneNumberFormControl: new FormControl('', [Validators.required]),
  });

  get emailData() {
    return this.userEmails.get('emailFormControl');
  }

  get jobValidatorData() {
    return this.userJobDescriptionFormGroup.get('jobDescriptionFormControl');
  }

  get nameValidatorData() {
    return this.userNameFormGroup.get('nameFormControl');
  }

  get phoneNumberValidatorData() {
    return this.phoneNumberFormGroup.get('phoneNumberFormControl');
  }
}
