import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import data from '../../../assets/Data/student.json';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  products;
  ngOnInit(): void {
    // console.log("Result====",data);
    this.httpClient.get("assets/student.json").subscribe(data =>{
      console.log("welcome",data);
      // this.products = data;
    })
  }

}
