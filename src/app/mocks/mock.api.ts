import { cashflowCategories } from './cashflowCategory.mock';
import { budgetDefinition } from './budgetDefinition.mock';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { records } from './records.mock';
import { budgets } from './budget.mock';

export class MockApi implements InMemoryDbService {
  createDb() {
    return {budgets, records, budgetDefinition, cashflowCategories};
  }
}
