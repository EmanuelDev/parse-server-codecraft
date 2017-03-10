'use strict';

var Client = require('node-rest-client').Client;

module.exports.getCluj = function () {
    var client = new Client();
    client.registerMethod("getWeatherCluj", "http://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a", "GET");

    return new Parse.Promise(function (resolve) {
        client.methods.getWeatherCluj(function (data, response) {

            response.json(data);
            // parsed response body as js object
            console.log(data);
            // raw response
            console.log(response);
        });

    })

};