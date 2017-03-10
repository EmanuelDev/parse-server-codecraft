var https = require('https');
var apiKey = "65dd2ac498f766ee2c834bdea819356a";
var queryString = "q=Cluj-Napoca,ro&APPID=";
var apiHost = "api.openweathermap.org/data/2.5/weather";

function performRequest (endpoint, method, data, success) {
    var dataString = JSON.stringify(data);
    var headers = {};

    if (method === 'GET') {
        endpoint += '?' + queryString.stringify(data) + apiKey;
    } else {
        headers = {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
        };
    }
    var options = {
        host: apiHost,
        path: endpoint,
        method: method,
        headers: headers
    };

    var req = https.request(options, function(res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('end', function() {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });
    });

    req.write(dataString);
    req.end();
}
