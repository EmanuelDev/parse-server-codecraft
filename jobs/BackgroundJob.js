/**
 * Created by emabo on 10/03/2017.
 */
var https = require('https');
var cron = require('node-cron');
var weatherService = require('../service/WeatherService.js');

var task = cron.schedule('* * * * *', function() {
    cosnole.log("cevaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

});

task.start();