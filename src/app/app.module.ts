import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from './employee/employee.module';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListService } from './employee/services/employee-list.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    HttpClientModule
  ],
  providers: [EmployeeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
