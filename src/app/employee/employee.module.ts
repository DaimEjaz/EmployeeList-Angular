import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeContainerComponent } from './components/employee-container/employee-container.component';
import { EmployeeListService } from './services/employee-list.service';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeContainerComponent,
    ButtonComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeContainerComponent
  ],
  providers: [
    EmployeeListService
  ]
})
export class EmployeeModule { }
