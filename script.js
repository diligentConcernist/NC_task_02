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
    return this.top == -1;
  }

  pop() {
    if (this.isEmpty() == false) {
      this.top--;
      return this.data.pop();
    }
  }

  peek() {
    return this.data[this.top];
  }
}

let stack = null;

function reverse_array(array) {
  const reversedArray = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = array[(array.length - 1) - i];
  }
  return reversedArray;
}

function get_data() {
  const data = this.data;
  console.log("Data from stack is " + reverse_array(data));
  return reverse_array(data);
}

function get_top() {
  const top = this.top;
  console.log("Top element is " + top);
  return top;
}

function create_stack() {
  if (stack == null) {
    stack = new Stack();
    document.getElementById("createStack").disabled = true;
    document.getElementById("fillStack").disabled = false;
    document.getElementById("elementField").disabled = false;
    document.getElementById("addElement").disabled = false;
    document.getElementById("peekElement").disabled = false;
    document.getElementById("popElement").disabled = false;
    document.getElementById("printStack").disabled = false;
    document.getElementById("stackField").disabled = false;
    document.getElementById("clearStack").disabled = false;
  }
}

function fill_stack() {
  if (stack != null) {
    for (let i = 0; i < 10; i++) {
      stack.push(Math.floor(Math.random() * 11));
    }
  }
}

function add_element() {
  if (stack != null) {
    let value = document.getElementById("elementField").value;
    stack.push(value);
    document.getElementById("elementField").value = "";
  }
}

function peek_element() {
  if (stack != null && stack.isEmpty() == false) {
    const result = get_top.call(stack);
  } else if (stack.isEmpty != false) {
    console.warn("Stack is empty!");
  }
}

function pop_element() {
  if (stack != null && stack.isEmpty() == false) {
    console.log("Top element was " + stack.pop());
  } else if (stack.isEmpty != false) {
    console.warn("Stack is empty!");
  }
}

function print_stack() {
  if (stack != null && stack.isEmpty() == false) {
    let result = get_data.apply(stack);
    result += "";
    let finalResult = result.split(",");
    result = "";
    for (let i = 0; i < stack.length(); i++) {
      result += finalResult[i] + "\n";
    }
    document.getElementById("stackField").value = result;
  } else if (stack.isEmpty != false) {
    console.warn("Stack is empty!");
  }
}

function clear_stack() {
  if (stack != null && stack.isEmpty() == false) {
    while (stack.isEmpty() == false) {
      stack.pop();
    }
    document.getElementById("stackField").value = "";
    console.log("Stack is cleared");
  } else if (stack.isEmpty != false) {
    console.warn("Stack is empty!");
  }
}
