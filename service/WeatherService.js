'use strict';

var Client = require('node-rest-client').Client;

module.exports.getClujWeather = function () {
    var client = new Client();
    client.registerMethod("getWeather", "http://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a", "GET");

    var result = new Parse.Promise();
    var Weather = Parse.Object.extend('WeatherCluj');
    var weatherCluj = new Weather();

    client.methods.getWeather(function (response) {
        weatherCluj.set("cityName", response.name);
        weatherCluj.set("country", response.sys.country);
        // weatherCluj.set("description", response.weather["description"].description);
        weatherCluj.set("windSpeed", response.wind.speed);
        result.resolve(response);
    }, function (err) {
        result.reject(error);
    });

    return result;

};