import { Component, OnInit } from '@angular/core';
import { GenerateCSVService } from 'src/app/Services/generate-csv.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MainControllerService } from '../../../Services/mainController.service'
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-stdreport',
  templateUrl: './stdreport.component.html',
  styleUrls: ['./stdreport.component.css']
})
export class StdreportComponent implements OnInit {
  // public AllData = [];
  config: any;
  collection = { count: 10, data: [] };
  p: Number = 1;
  count: Number = 5;

  source: LocalDataSource;

  constructor(private _mainService: MainControllerService,
    private router: Router, private http: HttpClient,
    private logger: NGXLogger) {
    this.source = new LocalDataSource(this.Data)

  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  startDate: any;
  endDate: any;
  Data: any = [];
  numerOfResult: number;
  ngOnInit() {
    this.logger.info("inside student Component")
    this.tData = true;
    this._mainService.getStudents().subscribe((result) => {
      this.Data = result;
      this.numerOfResult = this.Data.length;
      this.logger.info("All Data-->",this.Data)
    })
    var dt = new Date();
  }
  std_id;

  filter() {
    console.log("------=", this.std_id);
    this._mainService.getStudentsByid(this.std_id).subscribe((result) => {
      console.log(result)
      this.Data.push(result);
    });
  };
  filterData: any[]
  search(term: string) {
    console.log("search=====>");

    if (!term) {
      this.filterData = this.Data;
    } else {
      this.filterData = this.Data.filter(x =>
        x.name.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
    }
  };

  tData: boolean = false;
  delete(value) {
    console.log("inside Delete-->", value);
    let index = this.Data.indexOf(value)
    this.Data.splice(index, 1);
    this.tData = true;
    this._mainService.deteleById(value).subscribe((result) => {
      console.log(result);
      this.Data.push(this._mainService.getStudents());
    })
  }
  exportClick(AllData: any) {
    console.log("export click called", this.Data);
    // this._csvService.download_CSV(this.Data, 'studentreport');

  }
  movetoAdmission() {
    this.router.navigate(['/admission']);
  }

  addedDay = function addDays() {
    var dateObj = new Date();
    var val: any = dateObj.getTime();
    //86400 * 1000 * 3  Each day is 86400 seconds 
    var days = 604800000;

    val = val + days;
    dateObj = new Date(val); // ********important*********//
    val = dateObj.getMonth() + 1 + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
    alert(val);
  }

}
