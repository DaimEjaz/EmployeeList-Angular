import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeContainerComponent } from './components/employee-container/employee-container.component';
import { EmployeeListService } from './services/employee-list.service';
import { ButtonComponent } from './components/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule } from '@angular/material/chips';
import { UpdateFormComponent } from './components/update-form/update-form.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeContainerComponent,
    ButtonComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    NgbModule
  ],
  exports: [
    EmployeeContainerComponent
  ],
  providers: [
    EmployeeListService
  ]
})
export class EmployeeModule { }
