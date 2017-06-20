function duckCount() {
  let args = Array.from(arguments);

  return args.reduce((acc, val) => {
    let hasQuack = Object.prototype.hasOwnProperty.call(val, "quack");
    return hasQuack ? ++acc : acc;
  }, 0);
}

module.exports = duckCount;
