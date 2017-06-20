module.exports = function arrayMap(arr, fn) {
  return arr.reduce((acc, val) => {
    let transformed = fn(val);
    acc.push(transformed);
    return acc;
  }, []);
};
