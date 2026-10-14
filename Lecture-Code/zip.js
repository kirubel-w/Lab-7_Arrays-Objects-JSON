// Check if the ZIP code falls within the Minnesota ZIP code range
function isMinnesotaZipCode(code) {
    if (code >= 55001 && code <= 56763) {
        return true;
    } else {
        return false;
    }
}

// Put the city and state together, with the state in uppercase
function citySateAdress(city, state) {
    let adress = `${city}, ${state.toUpperCase()}`;
    return adress;
}

// Print the city and state for Minneapolis
console.log(citySateAdress('Minneapolis', 'mn')); // Minneapolis, MN
// Print the city and state for Saint Paul
console.log(citySateAdress('Saint Paul', 'mn')); // Saint Paul, MN
// Store the address for Seattle and print it
let adress = citySateAdress('Seattle', 'wa')
console.log(adress); // Seattle, WA

// Check if the GPA is between 0 and 4.0
function validGPA(gpa) {
    return gpa >= 0 && gpa <= 4.0;
}

// Check a valid Minnesota ZIP code
console.log(isMinnesotaZipCode(55401)); // true
// Check a ZIP code outside the range
console.log(isMinnesotaZipCode(12345)); // false
// Check a GPA within the allowed range
console.log