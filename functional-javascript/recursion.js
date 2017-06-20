function reduce(arr, fn, initial) {
  if (arr.length === 0) return initial;

  let next = arr[0];
  let reduced = fn(initial, next);
  let remainingArr = arr.slice(1);
  return reduce(remainingArr, fn, reduced);
}

module.exports = reduce;
