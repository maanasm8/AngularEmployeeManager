import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeLayoutComponent } from './components/employe-layout/employe-layout.component';
import { HomeComponent } from './components/home/home.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';

const routes: Routes = [
  { path: 'addEmployee', component: EmployeLayoutComponent },
  { path: 'tableLayout', component: TableLayoutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
