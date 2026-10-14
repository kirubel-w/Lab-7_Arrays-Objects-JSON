
let user = { username: 'clara', password: 'zebra' }

for (let name in user) {
    console.log(name + ': ' + user[name])
}

// Access properties using dot notation
console.log(user.username)

// Access properties using bracket notation
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

// Use a variable to access a property with bracket notation
let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

// Change the value of an existing property
user.password = 'alligator'
console.log(user)

// Add a new property to the object
user.email = 'clara@minneapolis.edu'
console.log(user)

// Access the new email property
console.log(user.email)
