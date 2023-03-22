import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import{environment} from '../../environments/environment';
import { map} from 'rxjs/operators';

const baseurl = environment.baseurl;
const token = localStorage.getItem('token'); 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  "Authorization": "Bearer " + token })
}
@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  constructor(private http: HttpClient, private logger: NGXLogger) {
    
  }
  postLogToServer(errorMsg: any) {
    this.logger.info("insde logger service---> ",errorMsg);
    return this.http.get(baseurl + "log/"+ errorMsg,httpOptions).pipe(map(res => res))
  }

}
