import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from '../../assets/models/employee-mock';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css'],
})
export class EmployeeNewComponent implements OnInit {
  desigList: String[] = [
    '',
    'Manager',
    'Production Manager',
    'Associate Engineer',
    'CFO',
    'Engineering Manager',
    'Engineer',
  ];
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      designation: new FormControl(null, Validators.required),
      doj: new FormControl(null, Validators.required),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(20),
        Validators.max(60),
        Validators.pattern('^[0-9]{2}$'),
      ]),
    });
  }

  ngOnInit(): void {
    console.log(EMPLOYEE);
  }
  id = 4536105;
  createForm() {
    const new_id = this.id + 1;
    this.id += 1;

    EMPLOYEE.push({
      emp_id: new_id,
      emp_name: this.myForm.get('name').value,
      designation: this.myForm.get('designation').value,
      age: this.myForm.get('age').value,
      doj: this.myForm.get('doj').value,
      email: this.myForm.get('email').value,
      mobile: this.myForm.get('mobileNumber').value,
    });
    console.log(EMPLOYEE);
    alert('data added successfully');
  }
  //Fill your code here
}
