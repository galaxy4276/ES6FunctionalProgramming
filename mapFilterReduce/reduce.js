module.exports.reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const item of iter) {
    acc = f(acc, item);
  }

  return acc;
}

module.exports.add = (a, b) => a + b;