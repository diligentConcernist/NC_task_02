import Stack from "./stack"

window.onload=function() {
  document.getElementById("createStack").addEventListener("click", createStack);
  document.getElementById("fillStack").addEventListener("click", fillStack);
  document.getElementById("addElement").addEventListener("click", addElement);
  document.getElementById("peekElement").addEventListener("click", peekElement);
  document.getElementById("popElement").addEventListener("click", popElement);
  document.getElementById("printStack").addEventListener("click", printStack);
  document.getElementById("clearStack").addEventListener("click", clearStack);

  const elements = document.querySelectorAll(".controls");

  for (const elem of elements) {
    elem.disabled = true;
  }
  document.getElementById("createStack").disabled = false;

  let stack = null;

function reverseArray(array) {
  const reversedArray = [];

  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = array[(array.length - 1) - i];
  }

  return reversedArray;
}

function getData() {
  const data = this.data;
  console.log("Data from stack is " + reverseArray(data));
  return reverseArray(data);
}

function createStack() {
  stack = new Stack();
  const elements = document.querySelectorAll(".controls");

  for (const elem of elements) {
    elem.disabled = false;
  }
  document.getElementById("createStack").disabled = true;
}

function fillStack() {
  for (let i = 0; i < 10; i++) {
    stack.push(Math.floor(Math.random() * 11));
  }
}

function addElement() {
  const value = document.getElementById("elementField").value;
  stack.push(value);
  document.getElementById("elementField").value = "";
}

function peekElement() {
  try {
    const result = stack.peek();
    console.log("Top element is " + result);
  } catch (e) {
    console.warn(e);
  }
}

function popElement() {
  try {
    console.log("Top element was " + stack.pop());
  } catch (e) {
    console.warn(e);
  }
}

function printStack() {
  if (stack.isEmpty() == false) {
    let result = getData.apply(stack);
    result += "";
    const splittedResult = result.split(",");
    result = "";
    for (let i = 0; i < stack.length(); i++) {
      result += splittedResult[i] + "\n";
    }
    if (result == "") {
      console.warn("Stack is empty!");
    }
    document.getElementById("stackField").value = result;
  } else if (stack.isEmpty != false) {
    console.warn("Stack is empty!");
  }
}

function clearStack() {
  if (stack.isEmpty() == false) {
    while (stack.isEmpty() == false) {
      stack.pop();
    }
    document.getElementById("stackField").value = "";
    console.log("Stack is cleared");
  } else {
    console.warn("Stack is empty!");
  }
}

};

