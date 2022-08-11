import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent implements OnInit {

  fetchedEmployee?: Employee;
  constructor() { }

  ngOnInit(): void {
  }

  empSelect(employee: Employee){
    this.fetchedEmployee = employee;
  }

}
