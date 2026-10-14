let animals = ['lion', 'tiger', 'cheetah']

// Get an animal by its index
console.log(animals[0]) // Output: lion
console.log(animals[1]) // Output: tiger
console.log(animals[1000]) // Output: undefined because there is no item at that index

// Add a new animal at index 3
animals[3] = 'giraffe'
console.log(animals) // Print the array
console.log(animals[5]) // Check what is at index 5

// Change the animal at index 1
animals[1] = 'zebra'
console.log(animals[1]) // Print the new value

// Add an animal to the end of the array
animals.push('elephant')
console.log(animals)

// Add an animal to the beginning of the array
animals.unshift('deer')

// Remove the last animal and save it in a variable
let lastAnimal = animals.pop()
console.log(lastAnimal) // Print the animal that was removed
console.log(animals) // Print the array after removing it

// Remove the first animal and save it in a variable
let firstAnimal = animals.shift()
console.log(firstAnimal) // Print the animal that was removed
console.log(animals) // Print the array after removing it

// Reverse the order of the animals
animals.reverse()
console.log(animals)

// Sort the animals alphabetically
animals.sort()
console.log(animals)

// Find out how many animals are in the array
let numberofAnimals = animals.length
console.log(numberofAnimals)

// Check the index of walrus in the array
console.log(animals.indexOf('walrus')) // Output: -1 if walrus is not found

// Check if walrus is missing from the array
if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}

// Check if cheetah is in the array
if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

// Put the animals together in one string with * between them
console.log(animals.join(' * ')) // Join the animal names with *

// Go through each animal and print its name in uppercase
animals.forEach(function (animal) {
    console.log(animal.toUpperCase())
})

// Print the number of letters in each animal's name
animals.forEach(function (animal) {
    console.log(animal.length)
})

// Add alligator to the end of the array
animals.push('alligator')

// Make an empty array to store the lengths of the animal names
let animalNameLength = []

// Go through each animal and save the length of its name
animals.forEach(function (animal) {
    let length = animal.length
    animalNameLength.push(length)
})

// Print the array of name lengths
console.log(animalNameLength)