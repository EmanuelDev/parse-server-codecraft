'use strict';

var weatherService = require('../service/WeatherService.js');

Parse.Cloud.define("getWeatherCluj", function (request, response) {
    var weatherClujResponse = undefined;
    weatherService.getCluj().then(function(response) {
        weatherClujResponse = response;

        console.log(response, "//////////////////////////////////////////////////////////////////////////////////////////////////////////////")

        response.success(weatherClujResponse);

    });

});