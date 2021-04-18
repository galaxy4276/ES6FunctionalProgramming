const map = (f: Function, iter: number[]) => {
  let res = [];
  for (const item of iter) {
    res.push(f(item));
  }
  return res;
}


export default map;
