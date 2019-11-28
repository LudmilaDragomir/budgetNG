import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Budget } from '../entities/budget';

@Component({
  selector: 'app-budget-progress',
  templateUrl: './budget-progress.component.html',
  styleUrls: ['./budget-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetProgressComponent implements OnInit {

  @Input()
  budget: Budget;  // to get data from the Dashboard



  today: string;

  // constructor() { }

  ngOnInit() {
    this.today = '60%';
  }

}
