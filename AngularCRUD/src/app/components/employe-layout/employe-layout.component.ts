import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-employe-layout',
  templateUrl: './employe-layout.component.html',
  styleUrls: ['./employe-layout.component.scss'],
})
export class EmployeLayoutComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addEmployee() {
    this.dialog.open(DialogComponent, {
      width: ' 80%',
    });
  }
}
