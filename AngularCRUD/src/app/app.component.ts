import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private employeeS: ApiService) {}
  title = 'AngularCRUD';
 ngOnInit():void{
  
 }
  getEmployeeData() {
    this.employeeS.getEmployee().subscribe({
      next: (res)=>{
        console.log(res);
      }
    });
  }
}
