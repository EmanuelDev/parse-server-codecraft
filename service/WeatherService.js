'use strict';

var Client = require('node-rest-client').Client;

module.exports.getCluj = function () {
    var client = new Client();
    client.registerMethod("getWeather", "http://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a", "GET");

    var result = new Parse.Promise();

    client.methods.getWeather().success(function (response) {
        result.resolve(response);
    }, function(error) {
        result.reject(error);
        return result;
    }).catch(function (error) {
        result.reject(error.stack);
        return result;
    });

    return result;

};