import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly rooturl = "http://localhost:55116/api"

  constructor(private http: HttpClient) { }

  postEmployee(formData : Employee){
    return this.http.post(this.rooturl+'/Employees',formData);
  }
  refreshlist(){
    this.http.get(this.rooturl+'/Employees')
    .toPromise().then(res => this.list= res as Employee[]);
  }

  putEmployee(formData : Employee){
    return this.http.put(this.rooturl+'/Employees/'+formData.EmployeeID,formData);
  }

  deleteEmployee(id : number){
    return this.http.delete(this.rooturl+'/Employees/'+id);
  }
}
