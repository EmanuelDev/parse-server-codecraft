'use strict';

var Client = require('node-rest-client').Client;

module.exports.getCluj = function () {
    var client = new Client();
    // var result = new Parse.Promise();
    client.registerMethod("getWeatherCluj", "http://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a", "GET");

    return client.methods.getWeatherCluj(function (data, response) {

        // result.resolve(response);
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
    });

};