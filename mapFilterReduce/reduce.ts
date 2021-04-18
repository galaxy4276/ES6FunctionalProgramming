const reduce = (f: any, acc: number, iter: any) => {
  if (!iter) {
    // @ts-ignore
    iter = acc[Symbol.iterator]();
    console.log(iter);
    acc = iter.next().value;
  }

  for (const item of iter) {
    acc = f(acc, item);
  }

  return acc;
}

export const add = <T extends number>(a: T, b: T) => a + b;

export default reduce;

console.log(reduce((a: number, b: number) => a + b, 0, [1, 2, 3, 4, 5]));