import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SummaryComponent } from './summary/summary.component';
import { BudgetProgressComponent } from './budget-progress/budget-progress.component';
import { DashboardService } from './dashboard.service';



@NgModule({
  declarations: [DashboardComponent, SummaryComponent, BudgetProgressComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
