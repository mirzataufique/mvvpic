import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  msg;
  constructor(private userService: UserService, private routes: Router, private activatedRoute: ActivatedRoute,private loaderService:LoaderService) {
    this.registerForm = new FormGroup({
      userEmail: new FormControl(null, Validators.email && Validators.required),
      userName: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, Validators.required),
      cnfPassword: new FormControl(null, this.passValidator),
      userType: new FormControl(null, Validators.required),
      docFile: new FormControl(null)
    });
    this.registerForm.controls.userPassword.valueChanges
      .subscribe(x => { this.registerForm.controls.cnfPassword.updateValueAndValidity() })
  }

  register() {
    console.log("hello", this.registerForm.value)
    // if (this.registerForm.valid) {
      this.userService.signUp(this.registerForm.value)
        .subscribe((result) => {
          console.log('result----', result);
          this.msg ='Successfuly created';
          this.errorMsg = false;
          this.successMsg = true;
        },(error)=>{
          console.log('An unexpected error ', error.error.message);
          this.msg = error.error.message;
          this.successMsg = false;
          this.errorMsg = true;
        }
        )
    // }
  }
  ngOnInit(): void {
  }
  isValid(controlName) {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null) || control.value !== undefined) {
      const cnfPassValue = control.value;

      const passControl = control.root.get('userPassword')
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfPassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }
  moveToLogin() {
    console.log("go to login====>")
    this.routes.navigate(['../login'], { relativeTo: this.activatedRoute })
  }

  onFileSelect(event) {
      let fileList: FileList = event.target.files;
      if(fileList.length > 0) {
        let file: File = fileList[0];
        console.log("File",this.registerForm.value)
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);


      this.registerForm.value.docFile = formData;
      console.log("Finale Form Value",this.registerForm.value)
      this.userService.signUp(this.registerForm.value)
        .subscribe((result) => {
          console.log('result----', result);
          this.msg ='Successfuly created';
          this.errorMsg = false;
          this.successMsg = true;
        },(error)=>{
          console.log('An unexpected error ', error.error.message);
          this.msg = error.error.message;
          this.successMsg = false;
          this.errorMsg = true;
        }
        )

      }}
  
}
