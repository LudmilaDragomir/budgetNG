import { Component, OnInit } from '@angular/core';
import { BudgetSummary } from './entities/budgetSummary';
import { CashflowSummary } from './entities/cashflowSummary';
import { Budget } from './entities/budget';
import { Period } from '../shared/entities/period';
import { DashboardService } from './dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // instanciate BudgetSummary and
   budgetSummary: BudgetSummary;
  cashflowSummary: CashflowSummary;
  budgets: Budget[] = [];
  budgetsSub: Subscription;
  budgetsLoaded = false;

  constructor(private dashboard: DashboardService) { }

  ngOnInit() {

    // this.budgets = this.dashboard.getBudgets();
    this .budgetsSub = this.dashboard.getBudgets(null).subscribe( budgets =>{
      this.budgets = budgets;
      this.budgetsLoaded = true;
    });
    this.budgetSummary = new BudgetSummary();
    this.cashflowSummary = new CashflowSummary();
  }

}
