'use strict';

var weatherService = require('../service/WeatherService.js');

Parse.Cloud.define("getWeatherCluj", function (request, response) {

    var weatherClujResponse = weatherService.getCluj().then(function() {
        response.success(weatherClujResponse);
    }, function(err) {
        console.log(err);
    });


});