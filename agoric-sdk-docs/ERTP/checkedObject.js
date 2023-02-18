const object1 = {};
let checked = false;
Object.defineProperty(object1, "value", {
  get() {
    if (checked) {
      return 1000000n;
    } else {
      checked = true;
      return 1n;
    }
  },
});
