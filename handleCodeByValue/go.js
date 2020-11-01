const map = require('../mapFilterReduce/map');
const filter = require('../mapFilterReduce/filter');
const { reduce } = require('../mapFilterReduce/reduce');
const { add } = require('../mapFilterReduce/reduce');
const log = console.log;
const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];


const go = (...args) => { // 배열 형변환
  reduce((value, f) => f(value), args);
} // reduce와 로직이 같다.
// args를 함수로 축약해서 하나의 값을 만든다.

const pipe = (f, ...fs) => (...args) => go(f(...args), ...fs);

go(
  10,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  log
);
// 121

const f = pipe(
    (a, b) => a + b,
    a => a + 10,
    a => a + 100, 
  log); // 세 개의 함수를 연속적으로 실행하면서 하나의 함수로 축약

f(0);