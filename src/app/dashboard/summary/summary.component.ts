import { Component, OnInit, Input } from '@angular/core';
import { BudgetSummary } from '../entities/budgetSummary';
import { CashflowSummary } from '../entities/cashflowSummary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input()
  budgetSummary: BudgetSummary;  // to get data from the Dashboard

  @Input()
  cashflowSummary: CashflowSummary; // to get data from the Dashboard

  // constructor() { }

  ngOnInit() {
  }

}
