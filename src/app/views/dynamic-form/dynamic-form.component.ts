import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl,ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
employeesForm : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  public createForm(){
    this.employeesForm =  this.fb.group({
      numOfForm : this.fb.array([this.craeteFormGroup()]),
      empId : [''],
      empName:[''],
      empDob : [''],
      empSal: [''],
      
      
    })
  }

  craeteFormGroup() : FormGroup{
    return new FormGroup({
      empId: new FormControl(''),
    })
  }

  adNewFrom(){
    const numOfForm = this.employeesForm.get('numOfForm') as FormArray
    numOfForm.push(this.craeteFormGroup())
  }

  submitData(){
    console.log(this.employeesForm.value)
  }
}
