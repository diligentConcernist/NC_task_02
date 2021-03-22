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
        return this.top - 1;
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

function create_stack() {
    stack = new Stack();
    document.getElementById("createStack").disabled = true;
    document.getElementById("fillStack").disabled = false;
    document.getElementById("elementField").disabled = false;
    document.getElementById("addElement").disabled = false;
    document.getElementById("peekElement").disabled = false;
    document.getElementById("popElement").disabled = false;
    document.getElementById("printStack").disabled = false;
    document.getElementById("stackField").disabled = false;
}

function fill_stack() {
    for (let i = 0; i < 10; i++) {
        stack.push(Math.floor(Math.random() * 11));
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
        console.log("Element on top of this stack is " + stack.peek());
    }

    else if (stack.isEmpty != false) {
        console.log("Stack is empty!");
    }
}

function pop_element() {
    if (stack != null && stack.isEmpty() == false) {
        console.log("Top element was " + stack.pop());
    }

    else if (stack.isEmpty != false) {
        console.log("Stack is empty!");
    }
}

function print_stack() {
    if (stack != null && stack.isEmpty() == false) {
        let result = "";
        while (stack.isEmpty() == false) {
            result = result + stack.pop() + "\n";
            top--;
        }
        document.getElementById("stackField").value = result;
    }

    else if (stack.isEmpty != false) {
        console.log("Stack is empty!");
    }
    
}
