import { Injectable } from '@angular/core';
import { Budget } from './entities/budget';
import { Period } from '../shared/entities/period';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getBudgets(period?: Period): Observable<Budget[]> {
    return this.http.get('/api/budgets')
    .pipe(
      map((budgets: any[]) => budgets.map(budget => Budget.build(budget)))
    );
  }


  getBudgets3(period?: Period): Observable<Budget[]> {
    return this.http.get('/api/budgets').pipe(map((budgets: Budget[]) => budgets.map(budget => Budget.build(budget))));
  }


  getBudgets_old() {
    const budgets: Budget [] = [];
    budgets.push(Budget.build(
      {
        id: 1,
        period: new Period(10, 2013),
        category: {id: 1, name: 'Food 1'},
        current: 100,
        max: 500
      })
    );
    budgets.push(Budget.build(
      {
        id: 2,
        period: new Period(10, 2013),
        category: {id: 2, name: 'Food 2'},
        current: 140,
        max: 600
      })
    );
    budgets.push(Budget.build(
      {
        id: 3,
        period: new Period(10, 2013),
        category: {id: 2, name: 'Food 3'},
        current: 1000,
        max: 1200
      })
    );
    return budgets;
  }
}
