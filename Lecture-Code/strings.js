let text = 'The classes are itec 1150, itec 1250, itec 2560, and itec 2565'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

// Replace all occurrences of 'itec' with 'ITEC'
let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2560'

// Add 'ITEC ' before each four-digit number
let replaceRegex = message.replace(/(\d{4})/g, 'ITEC $&')
console.log(replaceRegex)