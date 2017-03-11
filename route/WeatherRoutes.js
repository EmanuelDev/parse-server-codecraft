'use strict';

var weatherService = require('../service/WeatherService.js');

Parse.Cloud.define("getWeatherCluj", function (request, response) {
    var weatherClujResponse = undefined;

    var Weather = Parse.Object.extend('WeatherCluj');

    var weatherCluj = new Weather();

    weatherService.getClujWeather().then(function(data) {

        weatherClujResponse = data;
        weatherCluj.set("cityName", data.result.name);
        weatherCluj.set("country", data.result.sys.country);
        weatherCluj.set("description", data.result.weather.description);
        weatherCluj.set("windSpeed", data.result.wind.speed);

        response.success(weatherClujResponse);

    });



});