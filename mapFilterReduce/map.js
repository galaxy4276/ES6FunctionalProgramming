const map = (f, iter) => {
  let res = [];
  for (const item of iter) {
    res.push(f(item));
  }
  return res;
}


module.exports = map;