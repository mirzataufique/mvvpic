import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl,ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {

  constructor(private _fb : FormBuilder) { }
dynamicForm:  FormGroup
  ngOnInit(): void {
    this.dynamicForm = this._fb.group({
      fullname: this._fb.array([this.createFieldGroup()]),
      numOfForm: this._fb.array([this.createFormGroup()])

    })
 
  }
  addMore(){
    const fullname = this.dynamicForm.get('fullname') as FormArray;
    fullname.push(this.createFieldGroup())
  }

createFieldGroup() : FormGroup{
  return new FormGroup({
    fullname: new FormControl(''),
    
  })  
}

createFormGroup(): FormGroup{
  return new FormGroup({
    numOfForm:new FormControl('')
  })
}
}
