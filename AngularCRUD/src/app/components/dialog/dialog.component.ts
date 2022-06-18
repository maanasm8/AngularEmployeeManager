import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { retry } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    private formBui: FormBuilder,
    private apiSer: ApiService,
    private dialogRefS: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  types: string[] = ['Intern', 'Part-time', 'Full-time', 'Contractor'];
  employeeType: string | null = null;
  employeeNameNgModelVar: string | null = null;
  employeeFormGroup!: FormGroup;
  actionButton: string = 'Save';

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

    //If edit button is clicked, the data gets populated in editData injected throuth MAT_DIALOG_DATA
    if (this.editData) {
      this.actionButton = 'Update';
      //setting the data of form to the data from edit button click
      this.employeeFormGroup.controls['emailFormControl'].setValue(
        this.editData.emailFormControl
      );

      this.employeeFormGroup.controls['nameFormControl'].setValue(
        this.editData.nameFormControl
      );
      this.employeeFormGroup.controls['jobDescriptionFormControl'].setValue(
        this.editData.jobDescriptionFormControl
      );
      this.employeeFormGroup.controls['phoneNumberFormControl'].setValue(
        this.editData.phoneNumberFormControl
      );
      this.employeeFormGroup.controls['hireDateFormControl'].setValue(
        this.editData.hireDateFormControl
      );
      this.employeeFormGroup.controls['typeOfJobFormControl'].setValue(
        this.editData.typeOfJobFormControl
      );
      this.employeeFormGroup.controls['jobCategoryFormControl'].setValue(
        this.editData.jobCategoryFormControl
      );
    }
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
    // console.log('CLICKED');
    if (!this.editData) {
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
    } else {
      this.apiSer
        .putProduct(this.employeeFormGroup.value, this.editData.id)
        .subscribe({
          next: (res) => {
            alert('employee details updated');
            this.employeeFormGroup.reset();
            this.dialogRefS.close('update');
          },
          error: () => {
            alert('error while updating the form');
          },
        });
    }

    //  if (this.employeeFormGroup.valid) {

    //}
  }
}
