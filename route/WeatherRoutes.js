'use strict';

var weatherService = require('../service/WeatherService.js');

Parse.Cloud.define("getWeatherCluj", function (request, response) {
    var weatherClujResponse = undefined;
    weatherService.getClujWeather().then(function(data) {

        weatherClujResponse = data;
        response.success(weatherClujResponse);

    });

});