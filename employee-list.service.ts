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
  

  private url: string = "http://localhost/API/GetEmployees";

  getEmployees():Observable<Employee[]>{
   //Returning the list of Employee objects as Observables from sql database
    return this.http.get<Employee[]>(this.url);  
  }

  getEmployee(id: number): Observable<Employee>{
    //Returning the Employee object as Observables from sql database

    let empUrl = `http://localhost/API/GetEmployee/${id}`;
    return this.http.get<Employee>(empUrl);  
  }
}
