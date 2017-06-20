var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    let args = Array.from(arguments);
    console.log.apply(console, [namespace, ...args]);
  };
}

module.exports = logger;
