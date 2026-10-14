// Create an object called user with different properties
let user = {
    name: 'clara', // Store the user's name
    password: 'zebra', // Store the user's password
    email: 'clara@dreamjob.com', // Store the user's email address
    roles: ['programmer', 'developer'], // Store the user's roles in an array
    contact: {
        office: 'M123', // Store the office number
        telephone: '612123356' // Store the telephone number
    }
}

// Add a new salary property to the user object
user.salary = 12345

// Add a new role to the roles array
user.roles.push('server admin')

// Add a new location property to the contact object
user.contact.location = 'Minneapolis'

// Display the updated user object in the console
console.log(user)