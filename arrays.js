// Can't reassign in const but array or other reference types are modifiable (only reference address is constant)
const array = [3, 4]

// filled with undefined values inbetwwen
array[4] = 5
console.log(array[2])

// append
array.push(6, 7)

// insert at beginning
array.unshift(1, 2)

// insert at middle
array.splice(5, 0, 'a', 'b')

console.log(array)

// not using var/let/const is also possible, makes the variable global (if its not declared anywhere)
let products = [
    {name: 'daal', price: 3},
    {name: 'vaat', price: 5},
    {name: 'peyaj', price: 1},
    {name: 'morich', price: 2},
    {name: 'lobon', price: 1}
]

// finds the first item matching condition
let found = products.find(function(product) {
    return product.price === 1
})
console.log(found)

// with arrow function
found = products.find(product => product.price === 1)
console.log(found)

// copy
products_copy = [...products]
products_copy[0] = 1
// using spread operator
products_copy2 = products.slice()

// concat
combined = products.concat(products_copy)
// using spread operator
combined2 = [...products, ...products_copy2]

// sorting with comparator function
products.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase())
        return -1
    if (a.name.toUpperCase() > b.name.toUpperCase())
        return 1
    return 0
}).reverse()

console.log(products);

// filter
let filtered = products.filter(product => product.price >= 2)
console.log(filtered);

// map
let discounted = products.map(product => ({...product, price: product.price * 0.8}))
console.log(discounted);

// reduce
let numbers = [3, -2, 1, 0, 2]
// initial sum = firstValue, current = secondValue
let sum = numbers.reduce((accumulator, current) => accumulator + current)
console.log(sum);
// need 2nd argument to modify firstValue
let sumOfSquares = numbers.reduce((accumulator, current) => accumulator + current ** 2, 0)
console.log(sumOfSquares);

// Other functions: pop, shift (pop first item), includes, indexOf, every, some (python's any)

// Exercise: function to shift an element
function move(array, index, offset) {
    if(index < 0 || index >= array.length){
        console.error("Index out of bound");
        return;
    }
    if(index + offset < 0 || index + offset >= array.length){    
        console.error('Invalid offset');
        return;
    }
    
    return offset > 0 ? [...array.slice(0, index), ...array.slice(index+1, index+1+offset), array[index], ...array.slice(index+offset+1)]
        : [...array.slice(0, index+offset), array[index], ...array.slice(index+offset, index), ...array.slice(index+1)]
}

console.log(numbers);
console.log(move(numbers, 3, -2))

// OR
function move2(array, index, offset) {
    if(index < 0 || index >= array.length){
        console.error("Index out of bound");
        return;
    }
    if(index + offset < 0 || index + offset >= array.length){    
        console.error('Invalid offset');
        return;
    }
    
    let output = [...array]
    let item = array.splice(index, 1)
    return output.splice(index + offset, 0, item)
}

console.log(numbers);
console.log(move(numbers, 3, -2))


// Movies released in 2018 and with rating of at least 4
const movies = [
    {title: 'A', year: 2018, rating: 4.7},
    {title: 'B', year: 2018, rating: 4.0},
    {title: 'C', year: 2017, rating: 4.9},
    {title: 'D', year: 2018, rating: 3.9},
    {title: 'E', year: 2018, rating: 4.3}
]

const result = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((m1, m2) => m1.rating - m2.rating)
    .reverse()
    .map(m => m.title);

console.log(result);