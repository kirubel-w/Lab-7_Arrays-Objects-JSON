function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

// Call the function and print the result
console.log(shout('hello world'))  // Output: HELLO WORLD!!!
let message = shout('hello web programmers')
console.log(message)

// Convert Fahrenheit to Celsius
function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    // Round the result if decimal places are provided
    if (decimalPlaces) {
        return celsius.toFixed(decimalPlaces)
    }
}

// Set today's temperature in Fahrenheit
let todayTemp = 75
// Convert the temperature to Celsius
todaysCelsius = f_to_c(todayTemp)
console.log(todaysCelsius)