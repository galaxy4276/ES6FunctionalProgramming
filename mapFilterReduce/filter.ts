const filter = (f: Function, iter: number[]) => {
  let res = [];
  for (const item of iter) {
    if (f(item)) res.push(item);
  }
  return res;
}


export default filter;
