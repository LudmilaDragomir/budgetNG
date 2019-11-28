import { CashflowCategory } from '../../shared/entities/cashflowCategory';

export class Record {
  id: number;
  value: number;
  datetime: Date;
  // category: CashflowCategory;
  category: string;
  counterparty: string;
}
