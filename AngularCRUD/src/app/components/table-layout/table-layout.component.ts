import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss'],
})
export class TableLayoutComponent implements OnInit {
  isHome: boolean = true;
  displayedColumns: string[] = [
    'id',
    'nameFormControl',
    'emailFormControl',
    'hireDateFormControl',
    'phoneNumberFormControl',
    'jobCategoryFormControl',
    'typeOfJobFormControl',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeS: ApiService, private dialog: MatDialog) {}
  title = 'AngularCRUD';
  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.employeeS.getEmployee().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  //From MAT-TABLE:
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Edit functionality
  editEmployeeData(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '80%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getEmployeeData();
        }
      });
  }
}
