import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private usersS: UsersService) {}

  usersData: any;
  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersS.getUsers().subscribe((data) => {
      this.usersData = data;
      // console.log(this.usersData);
    });
  }
}
