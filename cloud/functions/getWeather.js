var request = require('request');
Parse.Cloud.define("getWeather", function(request, response) {
	// Set up to modify user data
	Parse.Cloud.useMasterKey();
	// var q = new Parse.Query("Player");
	// q.each(function (player) {
	// 	// Update to plan value passed in
	// 	player.set("notes", "");
	// 	return player.save();
	// }).then(function () {
	// 	// Set the job's success status
	// 	response.success("Player reset completed successfully.");
	// }, function (error) {
	// 	// Set the job's error status
	// 	response.error("Uh oh, something went wrong.");
	// });

});

// request('api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca,ro&APPID=65dd2ac498f766ee2c834bdea819356a', function (error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body);
// 	}
// });
