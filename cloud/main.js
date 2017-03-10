var request = require('request');
Parse.Cloud.define('hello', function(req, res) {
    request('api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.success(body);
        }
    });
});