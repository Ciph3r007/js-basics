// classes in es6 are just some syntax which uses prototypes behind the scene.
// classes can be declared in syntax from too. 
// unlike functions, classes are not hoisted in declaration syntax.
// es6 classes use strict mode by default [no global object reference with `this`]
// private properties can be implemented using Symbol/WeakMap

class Cat {
    constructor(name) {
        this.name = name;
        // methods declared here are instance methods
    }

    // methods declared here become prototype methods
    move() {
        console.log('sshhhh...');
    }

    // static methods, tied to class instead of objects
    static meow() {
        console.log('meow meow meow meow!!');
    }
}


// Stack implementation
const _items = new WeakMap(); 
class Stack {
    constructor() {
        _items.set(this, []);
    }

    get count() {
        return _items.get(this).length;
    }

    push(item) {
        _items.get(this).push(item);
    }

    pop() {
        if(this.count === 0)
            throw new Error('Stack is empty!');
        
        return _items.get(this).pop();
    }

    peek() {
        if(this.count === 0)
            throw new Error('Stack is empty!');

        const items = _items.get(this);
        return items[items.length - 1];
    }
}

const stack = new Stack();