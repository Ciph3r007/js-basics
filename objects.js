// Objects
// Object literal syntax
let user = {
    firstName: 'John',
    lastName: 'Snow',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    
    // sem shite
    // fullName: function fullName() {
    //     return this.firstName + ' ' + this.lastName;
    // }
}

console.log(user.fullName())

// Factory function
function createUser(firstName, lastName, phone) {
    return {
        firstName,
        lastName,
        phone
    }
}

function showUser(user) {
    for (const key in user) {
        console.log(key, user[key]);
    }
}

showUser(createUser('Omur', 'Faruque', 123456));

// Constructors
function User(firstName, lastName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
}

console.log(new User('Daenerys', 'Targaryen', 911));