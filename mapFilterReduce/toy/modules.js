const map = require('../map');
const filter = require('../filter');
const { reduce } = require('../reduce');
const { add } = require('../reduce');


const log = console.log;

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

log(
  reduce(
    add,
    map(p => p.price, filter(p => p.price < 20000, products))
  )
);

log(
  reduce(
    add,
    filter(n => n >= 20000,
      map(p => p.price, products))
));