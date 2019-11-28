import { cashflowCategories } from './cashflowCategory.mock';
import { CashflowCategory } from '../shared/entities/cashflowCategory';
import { Record } from '../records/entities/record';

function getRandomDate(): Date {
  const date = new Date();
  date.setMonth(9);
  date.setDate(Math.random() * 30 + 1);
  return date;
}

function getRandomCategory() {
  const category = cashflowCategories[Math.floor(Math.random() * cashflowCategories.length)];
  // const coutnerparty = category.counterpartyPatterns[0].value;
  //  ***revisar***???
  const coutnerparty = category.counterpartyPatterns ? category.counterpartyPatterns[0].value : '';

  return {
    category: category.name,
    counterparty: coutnerparty.charAt(0).toUpperCase() + coutnerparty.slice(1)
  };
}

function getRandomValue() {
  return Math.random() * 300;
}

function generateRecords() {
  const randomRecords: Record []= [];
  for (let i = 0; i < 50; i++) {
    randomRecords.push(
      {
        id: i,
        value: getRandomValue(),
        datetime: getRandomDate(),
        ...getRandomCategory()
      }
    );
  }
  // return randomRecords.sort((a, b) => a.datetime - b.datetime);
  return randomRecords.sort(
    (a: Record, b: Record) => a.datetime.getDate() - b.datetime.getDate()
    );
}

export const records = generateRecords();
