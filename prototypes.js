
// Everything is a direct or indirect child of ObjectBase prototype.
// By default, every property of an object is writable, enumerable and configurable
// (these properties are inherited from ObjectBase and defaults to true)
// object.__proto__ is same as ObjectConstructor.prototype

// Use prototype members instead of instance members to avoid multiple method copies
// Example:
function Dog(color) {
    this.color = color; 
    this.move = function () {
        console.log('Moving...');   
    }
}
// When there are many dog objects 'move' method will be redefined for each one unnecessarily
function Dog(color) {
    this.color = color;
}
Dog.prototype.move = function () {
    console.log('Moving...');   
}


// Inheritence using prototype
function Animal(color) {
    this.color = color;
}

Animal.prototype.move = function () {
    console.log('Moving...');
}

function Dog(color, breed) {
    Animal.call(this, color); // calling superclass with current object reference
    this.breed = breed; 
}

// Inheriting Animal
Dog.prototype = Object.create(Animal.prototype); // Defaults to Object.prototype
Dog.prototype.constructor = Dog; // resetting constructor

// Better to encapsulate in a function
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// For method overriding, always extend first (resetting prototype)
// For complex hierarchical inheritance composition/mixins is much better than extending
function mixin(target, ...sources) {
    // returning the value for empty object as target
    // usually target is constructor prototype
    return Object.assign(target, sources)
}

//i.e.: mixin(Fish.prototype, canEat, canSwim)