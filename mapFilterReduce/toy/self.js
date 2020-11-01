/*
  함수형 프로그래밍을 스스로 구현해보기
  map, filter, reduce
 */

const log = console.log;

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];


const map = (f, iter) => {
  let res = [];
  for (const item of iter) {
    res.push(f(item));
  }

  return res;
};

const filter = (f, iter) => {
  let res = [];
  for (const item of iter) {
    if (f(item)) res.push(item);
  }

  return res;
}

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const item of iter) {
    acc = f(acc, item);
  }

  return acc;
};

// 20000보다 낮은 상품들 가격 총 합 구하기
log(
  '20000보다 낮은 상품들 가격 총 합: ',
  reduce(
    (a, b) => a + b,
    filter(p => p <= 20000, 
      map(p => p.price, products))
  )
);

// 상품명 반팔티를 제외한 상품
log(
  '상품명 반팔티를 제외한 상품의 가격 총 합: ',
  reduce(
    (acc, item) => {
      if (acc.name) {
        acc = acc.price
      }
      return acc + item.price;
    },
    filter(
      product => product.name !== '반팔티',
      products
    )
  )
);