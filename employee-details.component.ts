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
    this.employeeListService.getEmployees().subscribe(data => this.employees = data);
  }

  previous(employee: Employee){
    //Making api call to server for previous employee, if not the start of list, using service
    let index = this.employees.indexOf(employee);
    if(index !== 0)
    {
      this.employeeListService.getEmployee(employee.Id - 1 > 0 ? employee.Id - 1: employee.Id).subscribe(data => this.selectedEmployee = data);

    }
    else{
      return
    }
  }

  next(employee: Employee){
    
    //Making api call to server for next employee, if not the end of list, using service

    let index = this.employees.indexOf(employee);
    if(index <= this.employees.length - 1 )
    {
      this.employeeListService.getEmployee(employee.Id + 1 <= this.employees.length ? employee.Id + 1: employee.Id).subscribe(data => this.selectedEmployee = data);

    }
    else{
      return
    }
  }
}
