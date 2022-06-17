import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { retry } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    private formBui: FormBuilder,
    private apiSer: ApiService,
    private dialogRefS: MatDialogRef<DialogComponent>
  ) {}

  types: string[] = ['Intern', 'Part-time', 'Full-time', 'Contractor'];
  employeeType: string | null = null;
  employeeNameNgModelVar: string | null = null;
  employeeFormGroup!: FormGroup;

  ngOnInit(): void {
    this.employeeFormGroup = this.formBui.group({
      emailFormControl: ['', Validators.email],
      nameFormControl: ['', Validators.required],
      jobDescriptionFormControl: ['', Validators.required],
      phoneNumberFormControl: ['', Validators.required],
      hireDateFormControl: ['', Validators.required],
      typeOfJobFormControl: ['', Validators.required],
      jobCategoryFormControl: ['', Validators.required],
    });
  }

  get emailData() {
    return this.employeeFormGroup.get('emailFormControl');
  }

  get jobValidatorData() {
    return this.employeeFormGroup.get('jobDescriptionFormControl');
  }

  get nameValidatorData() {
    return this.employeeFormGroup.get('nameFormControl');
  }

  get phoneNumberValidatorData() {
    return this.employeeFormGroup.get('phoneNumberFormControl');
  }

  get hireDateValidatorData() {
    return this.employeeFormGroup.get('hireDateFormControl');
  }

  /**
   * Add Employee
   */
  addEmployee() {
    console.log('CLICKED');
    //  if (this.employeeFormGroup.valid) {
    this.apiSer.postEmployee(this.employeeFormGroup.value).subscribe({
      next: (res) => {
        //  alert('Employee Added Successfully');
        this.employeeFormGroup.reset();
        this.dialogRefS.close('save');
      },
      error: () => {
        alert('Error while adding employee');
      },
    });
    //}
  }
}
