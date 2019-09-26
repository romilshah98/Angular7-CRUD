import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.service.refreshlist();
  }
  populateForm(emp: Employee){
    // To populate the form only when data is submitted
    this.service.formData = Object.assign({},emp);
  }

  onDelete(id : number){
    // This calls the deleteEmployee method from employee service and then refreshlist method to refresh the available data.
    this.service.deleteEmployee(id).subscribe(res =>{
      this.service.refreshlist();
    })
  }
}
