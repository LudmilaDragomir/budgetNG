import { Period } from '../../shared/entities/period';
import { CashflowCategory } from '../../shared/entities/cashflowCategory';

export class BudgetDefinition {
  id: number;
  period: Period;
  category: CashflowCategory;
  maxExpense: number;
}
