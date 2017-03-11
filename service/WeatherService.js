'use strict';

var Client = require('node-rest-client').Client;

module.exports.getClujWeather = function () {
    var client = new Client();
    client.registerMethod("getWeather", "http://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a", "GET");

    var result = new Parse.Promise();
    var WeatherCluj = Parse.Object.extend('WeatherCluj');
    var weatherCluj = new WeatherCluj();

    client.methods.getWeather(function (response) {
        weatherCluj.set("cityName", response.name);
        weatherCluj.set("country", response.sys.country);
        // weatherCluj.set("description", response.weather["description"].description);
        weatherCluj.set("windSpeed", response.wind.speed);
        console.log(response.weather[description].description, "////////////////////////////////////////////////////////////////////////////////////////////////////////");
        weatherCluj.save();
        result.resolve(response);
        console.log()
    }, function (err) {
        result.reject(error);
    });

    console.log("bla")
    return result;

};