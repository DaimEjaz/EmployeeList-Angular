import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeListService } from '../../services/employee-list.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees!: Employee[];

  @Input() selectedEmployee?: Employee;
  
  constructor(private employeeListService : EmployeeListService) { }

  ngOnInit(): void {
    this.employees = this.employeeListService.getEmployees();
  }

  next(employee: Employee){
    for(let emp of this.employees){
      if(emp.empId == employee.empId && employee !== this.employees[this.employees.length - 1]){
        var index = emp.empId;
        var nextEmp = this.employees[index];
        this.selectedEmployee = nextEmp;
      }

    }
  }

  previous(employee: Employee){
    for(let emp of this.employees){
      if(emp.empId == employee.empId && employee !== this.employees[0]){
        var index = employee.empId;
        var previousEmp = this.employees[index - 2];
        this.selectedEmployee = previousEmp;
      }

    }
  }
}
