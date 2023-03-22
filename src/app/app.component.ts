import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NGXLogger} from 'ngx-logger';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mvvpic';

  constructor(public routes: Router,private logger: NGXLogger) {
    // this.logger.debug("Debug message");
    // this.logger.info("Info message");
    // this.logger.log("Default log message");
    // this.logger.warn("Warning message");
    // this.logger.error("Error message");
  }

  // public msgClass ={
  // "text-success":this.isSuccess,
  // "text-danger":this.isDanger,
  // "text-uppercase":this.isUpperCase,
  // "text-lowercase":this.isLowerCase
  // }
  ngOnInint() {

  }

}
