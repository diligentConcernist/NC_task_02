class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(element) {
    this.top++;
    this.data[this.top] = element;
  }

  length() {
    return this.top + 1;
  }

  isEmpty() {
    if (this.top == -1) {
      return 1;
    } else {
      return 0;
    }
  }

  pop() {
    if (this.isEmpty() == false) {
      this.top--;
      return this.data.pop();
    } else {
      throw "Stack is empty!";
    }
  }

  peek() {
    if (this.isEmpty() == false) {
      return this.data[this.top];
    } else {
      throw "Stack is empty!";
    }
  }
}

(function() {
  const defaultLog = console.log;

  console.log = function() {
    const message = [];
    while (arguments.length) {
      message.push("We got the following from Stack: " +
      [].shift.call(arguments));
    }

    defaultLog.apply(console, message);
  };

  const defaultWarn = console.warn;

  console.warn = function() {
    const message = [];
    while (arguments.length) {
      message.push("Warning from Stack! " + [].shift.call(arguments));
    }

    defaultWarn.apply(console, message);
  };
})();

export default Stack;
