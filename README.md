# Weather App using React

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Configuration](#api-configuration)
6. [Backend Integration](#backend-integration)

## Introduction
This Weather App is built with React and provides real-time weather information for a specific location. It displays current weather conditions, temperature, humidity, and wind speed.

## Installation
### Prerequisites
- Node.js and npm installed

### Steps
1. Clone this repository to your local machine: `https://github.com/Madhavmoudhgal/Weather-App.git`
2. Navigate to the project directory: `cd weather-app`
3. Install project dependencies: `npm install`
4. **User must enter a location to view weather information.**

## Usage
1. Enter a city name or zip code in the search bar.
2. Click the "Search" button or press the search icon."
3. The app will display the current weather conditions for the entered location, including temperature, humidity, wind speed.

## API Configuration
To use this Weather App, you'll need to obtain an API key from OpenWeather. Follow these steps to configure your API key:

1. Visit the [OpenWeather website](https://openweathermap.org/) and sign up for an account.
2. Once you have an account, log in and navigate to the API Keys section.
3. Generate a new API key and copy it.
4. Open the `Weather.jsx` file in your project directory.
5. Locate the variable where you store your OpenWeather API key. It may look something like this:

   ```javascript
   const api_Key = 'Your_Api_Key';
 ## Backend Integration
This Weather App is not only a frontend application but also features a backend component. The backend is responsible for handling API requests and fetching weather data from OpenWeather.

To access the backend and retrieve weather information, you can use the following endpoint:

- **Backend API Endpoint**: [https://github.com/Madhavmoudhgal/Weather-appBackend.git](https://github.com/Madhavmoudhgal/Weather-appBackend.git)

The backend is crucial for securely interfacing with OpenWeather's API, and it ensures the smooth operation of this Weather App.
   
