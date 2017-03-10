
Parse.Cloud.define('addAge', function(request, response) {

  Parse.Cloud.useMasterKey();
  var q = new Parse.Query("User");
  q.each(function (user) {
    user.set("age", 6);
    return user.save();
  }).then(function() {
    response.success("Added age on user successfully.");
  }, function(error) {
    response.error("Uh oh, something went wrong.");
  })

});