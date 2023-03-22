import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {environment} from '../../environments/environment';



const baseurl = environment.baseurl;
const token = localStorage.getItem('token'); 
console.log("get Token inside main service",token)
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  "Authorization": "Bearer " + token })
}


@Injectable({
  providedIn: 'root'
})
export class MainControllerService {

  constructor(private http: HttpClient, private routes: Router) { }

  msg;
  // loginStudent(uname: string, pass: string,) {
  //   if (uname != null && uname != "" || pass != null && pass != "") {
  //     console.log("if condition called");
  //     // cheking route authentication-------------->
  //     var checkUserData = this.logService.getLoginDetails(uname, pass);
  //     var checkedRoute = this.logService.checkUserCredential(uname, pass);

  //     if (checkUserData != null) {
  //       if (checkedRoute == true) {
  //         this.logService.getLoginDetails(uname, pass);
  //         this.routes.navigate(['/home']);
  //       }
  //       else {
  //         this.routes.navigate(['/login']);
  //         this.msg = "Invalid Credential Please Try agian...!";
  //       }
  //     }
  //   }
  //   else {
  //     this.msg = "Invalid Credential Please Try agian...!";
  //   }
  // };
  getStudents(): Observable<any> {
    console.log("inside service====",)
    return this.http.get(baseurl + "student",httpOptions)
    .pipe(map((data: any) => {
      return data;
    }),
      catchError(error => {
        return throwError('Something went wrong!');
      })
    )
  };

  getStudentsByid(_id): Observable<any> {
    console.log("inside main services", _id)
    return this.http.get(baseurl + "student" + _id)
      .pipe(map((data: any) => {
        return data;
      }),
        catchError(error => {
          return throwError('Something went wrong!');
        })
      )

  };
  deteleById(_id): Observable<any> {
    console.log("inside main services---delete", _id)
    return this.http.delete(baseurl + "student/" + _id)
      .pipe(map((data: any) => {
        return data;
      }),
        catchError(error => {
          return throwError('Something went wrong!',error);
        })
      )
  };

  addStudent(data): Observable<any> {
    console.log("stdData- in service--->", data)
    console.log("Token in service--->",httpOptions)
    return this.http.post(baseurl + 'student', data, httpOptions)
      .pipe(map((data: any) => {
        return data;
      }),
        catchError(error => {
          return throwError(error);
        })
      )
  };

}
