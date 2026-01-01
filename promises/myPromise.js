class MyPromise {
  constructor(executor) {
    this.executor = executor; // (r) => setTimeout(() => r(1000), 2000)

    this.resolve = function (value) { // bna
      this.isResolved = true;
      this.resolvedValue = value;
      if (this.onResolve) { //
        this.onResolve(value);
      }
    };

    this.reject = function () {};
    if (this.executor) {
      this.executor(this.resolve.bind(this), this.reject.bind(this));
    }
  }
  // "trim("hh")
  then(onResolve) {
    this.onResolve = onResolve;

    if (this.isResolved) {
      this.onResolve(this.resolvedValue);
    }
    return new MyPromise(() => {});
  }
}

const p = new MyPromise((r) => setTimeout(() => r(100), 2000));
console.log(p.then((x) => console.log(x, "iam here")), "k");
