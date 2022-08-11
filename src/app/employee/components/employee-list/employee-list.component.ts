import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeListService } from '../../services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
    
  @Output() btnClick = new EventEmitter<Employee>();
  constructor(private employeeListService : EmployeeListService) { }

  ngOnInit(): void {
    this.employees = this.employeeListService.getEmployees();
  }

  empClick(employee: Employee){
    this.btnClick.emit(employee)
    console.log(this.employees[0]);
  }

}
