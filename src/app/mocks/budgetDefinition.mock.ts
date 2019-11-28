import { Period } from '../shared/entities/period';
import { cashflowCategories } from './cashflowCategory.mock';
import { BudgetDefinition } from '../settings/entities/budgetDefinition';

const period = new Period(9, 2017);

export const budgetDefinition: BudgetDefinition[] = [
  {
    id: 1,
    period: new Period(9, 2019),
    category: cashflowCategories[0],
    maxExpense: 2000
  },
  {
    id: 2,
    period,
    category: cashflowCategories[1],
    maxExpense: 500
  },
  {
    id: 3,
    period,
    category: cashflowCategories[2],
    maxExpense: 1000
  },
  {
    id: 4,
    period,
    category: cashflowCategories[3],
    maxExpense: 1200
  },
  {
    id: 5,
    period,
    category: cashflowCategories[4],
    maxExpense: 2010
  }
];
