const filter = (f, iter) => {
  let res = [];
  for (const item of iter) {
    if (f(item)) res.push(item);
  }
  return res;
}


module.exports = filter;
