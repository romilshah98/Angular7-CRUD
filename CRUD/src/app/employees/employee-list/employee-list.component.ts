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
    this.service.formData = Object.assign({},emp);
  }

  onDelete(id : number){
    this.service.deleteEmployee(id).subscribe(res =>{
      this.service.refreshlist();
    })
  }
}
