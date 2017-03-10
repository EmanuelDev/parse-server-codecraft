/**
 * Created by emabo on 10/03/2017.
 */

var cron = require('node-cron');

var task = cron.schedule('*/10 * * * *', function() {
    console.log('running a task every minute');
});