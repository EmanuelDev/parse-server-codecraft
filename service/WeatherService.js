'use strict';

var Client = require('node-rest-client').Client;

var WeatherCluj = Parse.Object.extend('WeatherCluj');
var weatherCluj = new WeatherCluj();

module.exports.getClujWeather = function () {
    var client = new Client();
    client.registerMethod("getWeather", "http://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a", "GET");

    var result = new Parse.Promise();

    client.methods.getWeather(function (response) {
        weatherCluj.set("cityName", response.name);
        weatherCluj.set("country", response.sys.country);
        // weatherCluj.set("description", response.weather["description"].description);
        weatherCluj.set("windSpeed", response.wind.speed);
        weatherCluj.set("description", response.weather[0].description);
        weatherCluj.save();
        result.resolve(response);
        console.log()
    }, function (err) {
        result.reject(error);
    });

    console.log("bla")
    return result;

};