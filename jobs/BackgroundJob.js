/**
 * Created by emabo on 10/03/2017.
 */
var https = require('https');
var cron = require('node-cron');
var weatherService = require('../service/WeatherService.js');

var task = cron.schedule('* * * * *', function() {
    weatherService.getClujWeather().then(function(data) {

        response.success(data);

    });
});

task.start();