/* Hoisting
 * --------
 * Functions with declaration syntax are moved to the top when compiling. 
 * So they can be used before declaration.
 */

foo(); // can be used bcs of hoisting
function foo() {
    console.log('Foo!');
}

// shoo(); // can't be used due to function expression syntax
// let shoo = function() {
//     console.log('Shoo!');
// }


// js doesn't throw error on invalid number of arguments
function sum() {
    console.log(arguments); // an iterator, but not an array
    
    let total = 0;
    for(arg of arguments)
        total += arg
    
    return total
}
console.log(sum(1,2,3))

// rest operator
function sum2(...args) {
    return args.reduce((a, b) => a + b)
}
console.log(sum2(1,2,3));

// pythonlike default keyword arguments are also available from ES6
// in cases like callback functions nested in methods reference global objects (i.e. window) as 'this'
// arrow functions can solve this as they inherit current object as 'this'
const demoThis = {
    name: 'demo',
    x: [1],
    method() {
        // methods reference current object
        console.log(this);

        // global object referenced 
        this.x.forEach(function(item){
            console.log(this)
        }); 

        // can be solved with call/apply/bind
        this.x.forEach(function(item){
            console.log(this)
        }.bind(this)); 

        // solved with arrow function
        this.x.forEach(item => console.log(this)) 
    }
}

demoThis.method();