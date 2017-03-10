'use strict';

var weatherService = require('../service/WeatherService.js');

Parse.Cloud.define("getWeatherCluj", function (request, response) {
    var weatherClujResponse = undefined;
    weatherService.getCluj().then(function(data) {
        weatherClujResponse = data;

        console.log(data, "//////////////////////////////////////////////////////////////////////////////////////////////////////////////")

        response.success(weatherClujResponse);

    });

});