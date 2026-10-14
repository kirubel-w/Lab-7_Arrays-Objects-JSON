let takenCSharp = false
let takenJava = false

// Check if the person has taken at least one of the two classes
if (takenCSharp || takenJava) {
    console.log('You meeet the prerequisites for Android ')
} else {
    console.log('You must take C# or Java')
}

// Set the person's age, citizenship time, and state information
let age = 40
let usCitizenTime = 5
let stateOfResidence = 'Wisconsin'
let stateWantToRep = 'Minnesota'

// Check if the person meets all the requirements to be a senator
if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRep) {
    console.log('You are eligible to be a senator')
} else {
    console.log('You are not eligible to be a senator')
}