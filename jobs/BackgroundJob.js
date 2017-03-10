/**
 * Created by emabo on 10/03/2017.
 */
var https = require('https');
var cron = require('node-cron');

var task = cron.schedule('*/10 * * * *', function() {
    var options = {
        host: 'api.openweathermap.org',
        port: 80,
        path: 'data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a',
        method: 'GET'
    };

    https.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (body) {
            console.log('BODY: ' + body);
            // var Weather = Parse.Object.extend("Weather");
            // var weather = new Weather();
        });
    }).end();

});

task.start();