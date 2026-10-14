let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London", // The city name
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "main": {
                "temp": 7,            // Current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": {
                "speed": 4.6,     // Wind speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",   // Weather description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",  // Another weather description
                    "icon": "09d"
                }
            ]
        }
    ]
}

// Get the weather list and print it
let weatherList = weather.list
console.log(weatherList)

// Get the first object in the list
let weatherInfo = weatherList[0]
console.log(weatherInfo)

// Get the main weather info
let main = weatherInfo.main
console.log(main)

// Get the wind info
let wind = weatherInfo.wind

// Get the wind speed
let speed = wind.speed
console.log('Current wind speed is ' + speed) // Print the wind speed

// Get the temperature and print it
let currentTemp = main.temp
console.log('The current temp is ' + currentTemp) // Print the temperature

// Get the temperature in one line
let temp = weather.list[0].main.temp
console.log(temp)

// Get the array with the weather descriptions
let weatherDescriptionArray = weatherInfo.weather

// Make an empty array to put the descriptions in
let descriptions = []

// Go through the weather array and get each description
weatherDescriptionArray.forEach(function (weatherDescription) {
    // console.log(weatherDescription.description)
    // Add the description to the array
    descriptions.push(weatherDescription.description)
})

// Put the descriptions together with a comma between them
let descriptionString = descriptions.join(', ')
console.log('The weather is ' + descriptionString) // Print the weather descriptions