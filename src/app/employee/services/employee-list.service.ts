import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http: HttpClient) { }

  employees!: Employee[]
  //   {
  //     empId : 1,
  //     empName: "Atif",
  //     yearJoined: 2022
  //   },
  //   {
  //     empId : 2,
  //     empName: "Huzefa",
  //     yearJoined: 2022
  //   },
  //   {
  //     empId : 3,
  //     empName: "Junaid",
  //     yearJoined: 2022
  //   }
  // ];

  private url: string = "https://localhost:44340/GetEmployees";
  private secUrl: string = "https://localhost:44340/GetEmployee/";

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);  
  }

  getEmployee(id: number){
    return this.http.get<Employee>(this.secUrl + id);  
  }
}
