import { CounterpartyPattern } from './couterpartyPattern';

export class CashflowCategory {
  id: number;
  name = '';
  counterpartyPatterns?: CounterpartyPattern[] = [];
}
