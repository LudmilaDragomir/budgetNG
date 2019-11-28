import { Budget } from '../dashboard/entities/budget';
import { Period } from '../shared/entities/period';

const period = new Period(10, 2012);
const b1 = new Budget();

export const budgets = [
  {
    id: 1,
    period,
    category: { id: 1, name: 'Food' },
    current: 100,
    max: 500
  },
  {
    id: 2,
    period,
    category: { id: 2, name: 'Entertainment' },
    current: 100,
    max: 300
  },
  {
    id: 3,
    period,
    category: { id: 3, name: 'Transport' },
    current: 100,
    max: 200
  },
  {
    id: 4,
    period,
    category: { id: 4, name: 'Eating outside' },
    current: 600,
    max: 700
  },
    {
    id: 5,
    period,
    category: { id: 5, name: 'Shopping' },
    current: 400,
    max: 500
  },
    {
    id: 6,
    period,
    category: { id: 6, name: 'Cloths' },
    current: 100,
    max: 200
  }
];
