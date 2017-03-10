'use strict';

var weatherService = require('../service/WeatherService.js');

Parse.Cloud.define("getWeatherCluj", function (request, response) {

    var weatherCluj = weatherService.getCluj();
    response.success(weatherCluj);

});