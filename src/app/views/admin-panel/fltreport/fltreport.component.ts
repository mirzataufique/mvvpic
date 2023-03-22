import { Component, OnInit } from '@angular/core';
import { UserService}  from '../../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fltreport',
  templateUrl: './fltreport.component.html',
  styleUrls: ['./fltreport.component.css']
})
export class FltreportComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,) { }

  // logedInUser:any=[];
  userData:any []
  numerOfResult;
  ngOnInit(): void {
    this.userService.getUser().subscribe((result)=>{
      this.userData = result;
      console.log('result', this.userData)
     this.numerOfResult= this.userData.length;
    })
    
  }
  tData: boolean = false;
  delete(value){
    console.log("inside Delete-->",value);
    let index = this.userData.indexOf(value);
    this.userData.splice(index, 1);
    this.tData = true;
    this.userService.deteleById(value).subscribe((result)=>{
      console.log(result);
      this.userData.push(result);
    })
  }
  movetoAddFaculty(){
    this.router.navigate(['/faculty']);
  }

}
