import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms'; // To use angular form

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }


  ngOnInit() {
    this.resetForm();
  }
  // This function is used to reset the form
  resetForm(form? : NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      EmployeeID : null,
      FullName : '',
      Position : '',
      EmpCode : '',
      Mobile : ''
    }
  }
  onSubmit(form : NgForm){
    // If EmployeeID is null then it will insert the Data
    if(form.value.EmployeeID==null)
      this.insertRecord(form);
     // If EmployeeID is not null then it will update the Data 
    else
      this.updateRecord(form);
    
  }
  insertRecord(form: NgForm){
    // calling post method from employee service
    this.service.postEmployee(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.refreshlist();
    });
  }

  updateRecord(form: NgForm){
    // calling put method from employee service
    this.service.putEmployee(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.refreshlist();
    });
  }
}
