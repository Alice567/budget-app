import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { BudgetModel } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetsApiService {
  private url:string = "http://localhost:8080/budgets"

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any>{
    var result = this.httpClient.get(this.url);
    return result;
  }
    updateBudget(id:number, request:BudgetModel): Observable<any> {
      return this.httpClient.put(this.url + "/" + id, request);
    }
//TODO: Add this on your app:
  //   addBudget(request: BudgetModel): Observable<any> {
  //     return this.httpClient.post(this.url , request);
  //   }
  
    deleteBudget(id:string): Observable<any> {
      return this.httpClient.delete(this.url + "/" + id);
    }
 }
