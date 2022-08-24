import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPensionDetails } from '../shared/models/pensionDetails';
import { IProcessedPension } from '../shared/models/processedPension';
import { IProcessRequest } from '../shared/models/processRequest';


@Injectable({
  providedIn: 'root'
})
export class FormsService {
  processedPensionDetails: IProcessedPension;
  private requestSource = new BehaviorSubject<IProcessRequest>(null);
  request$ = this.requestSource.asObservable();
   
  constructor(private http: HttpClient, private router: Router) { }
  
  submitRequest(incomingRequest: IProcessRequest) {
    const headers = {'content-type': 'application/json'
  ,'Authorization': 'Bearer ' + localStorage.getItem('token')
};
    const body = JSON.stringify(incomingRequest);
    return this.http.post<IProcessedPension>(environment.processPensionApi,body,{'headers':headers})
    .pipe(
      map((request: IProcessedPension)=>{
        if(request){
          this.processedPensionDetails = request;
          return request;
        }
      }));
    }


  }
