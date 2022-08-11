import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor() { }

  employees: Employee[] = [
    {
      empId : 1,
      empName: "Atif",
      yearJoined: 2022
    },
    {
      empId : 2,
      empName: "Huzefa",
      yearJoined: 2022
    },
    {
      empId : 3,
      empName: "Junaid",
      yearJoined: 2022
    }
  ];

  getEmployees():Employee[]{
    return this.employees;
  }
}
