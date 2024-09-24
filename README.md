# Weather App

This is a simple weather application built with Node.js, Express, and EJS that fetches weather data, news, and currency exchange rates for a specified city.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
- [File Structure](#file-structure)
- [Contributing](#contributing)

## Features

- Displays current weather information including temperature, humidity, pressure, and wind speed.
- Provides the latest news articles related to the specified city.
- Shows currency exchange rates for KZT and EUR against USD.
- Interactive map using Leaflet to display the location of the city.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Amukajuzz/weather-app.git
   cd weather-app
## Usage
To start the application, run:

npm start

The application will be available at http://localhost:3000.

To get weather data for a specific city, enter the city name in the input field and click "Get Weather".

## Environment Variables
The application uses the following environment variables stored in the .env file:

API_KEY_OPENWEATHER: API key for OpenWeatherMap.
API_KEY_NEWS: API key for News API.
API_KEY_CURRENCY: API key for the currency exchange API.
## API Integration
Weather API
Endpoint: https://api.openweathermap.org/data/2.5/weather

Parameters:

q:City name

appid: Your OpenWeather API key

units: Metric (for Celsius)

News API
Endpoint: https://newsapi.org/v2/everything

Parameters:

q: City name

apiKey: Your News API key

Currency Exchange API

Endpoint: https://api.exchangerate-api.com/v4/latest/USD
## File Structure
src/public/css/: Contains the CSS styles for the application.

src/public/images/: Contains the background image for the application.

src/views/: Contains the EJS templates for rendering the views.

app.js: Main application file.

.env: Configuration file for environment variables.

## Contributing
Contributions are welcome! If you have suggestions for improvements or want to report a bug, please open an issue or submit a pull request.
