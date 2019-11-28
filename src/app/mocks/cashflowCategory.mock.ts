import { CashflowCategory } from '../shared/entities/cashflowCategory';

export const cashflowCategories: CashflowCategory[] = [
  {
    id: 1,
    name: 'Food',
    counterpartyPatterns: [
      { value: 'mcdonalds' },
      { value: 'kfc' },
      { value: 'subway' }
    ]
  },
  {
    id: 2,
    name: 'Shopping',
    counterpartyPatterns: [
      { value: 'wallmart' },
      { value: 'kaufland' },
      { value: 'auchan' }]
  },
  {
    id: 3,
    name: 'Entertainment',
    counterpartyPatterns: [
      { value: 'rocky bowling' },
      { value: 'johnys pub' },
      { value: 'ricky bar' }
    ]
  },
  {
    id: 4,
    name: 'Transport',
    counterpartyPatterns: [
      { value: 'gas station' },
      { value: 'tube machine' }]
  },
  {
    id: 5,
    name: 'Cloths',
    counterpartyPatterns: [
      { value: 'tkmax' },
      { value: 'primark' }]
  }
];
