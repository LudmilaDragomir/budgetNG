import { Period } from '../../shared/entities/period';
import { CashflowCategory } from '../../shared/entities/cashflowCategory';

export class Budget {
  id: number;
  period: Period;
  category: CashflowCategory;
  current = 0;
  max = 0;
  get left(): number { return this.max - this.current; }
  get leftPercentage(): string { return 100 * this.current / this.max + '%'; }

  static build(params: any): Budget {
    const budget = new Budget();
    return Object.assign(budget, params);
  }
}
