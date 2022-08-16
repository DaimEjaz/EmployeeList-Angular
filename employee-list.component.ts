import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeListService } from '../../services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees$!: Employee[];
    
  @Output() btnClick = new EventEmitter<Employee>();
  constructor(private employeeListService : EmployeeListService) { }

  ngOnInit(): void {
    this.employeeListService.getEmployees().subscribe(data => this.employees$ = data);
    console.log(this.employees$);
  }

  empClick(employee: Employee){
    this.btnClick.emit(employee)
  }

}
