class Stack {
  constructor() {
    this.items = [];
  }

  enque(val) {
    this.items.push(val);
  }

  deque() {
    return this.items.pop();
  }

  print() {
    console.log(this.items.join(""));
  }
}

let string = "hello";
const stack = new Stack();
for (let i = string.length - 1; i >= 0; i--) {
  stack.enque(string[i]);
}
stack.print();
