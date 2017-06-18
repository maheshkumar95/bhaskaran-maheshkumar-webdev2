require('./services/user.service.server');
require('./services/website.service.server');
require('./services/widget.service.server');
require('./services/page.service.server');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webdev_summer1_2017');
mongoose.Promise = require('q').Promise;

var connectionString = 'mongodb://127.0.0.1:27017/test';

if(process.env.MLAB_USERNAME) {
    connectionString = process.env.MLAB_USERNAME + ":" +
        process.env.MLAB_PASSWORD + "@" +
        process.env.MLAB_HOST + ':' +
        process.env.MLAB_PORT + '/' +
        process.env.MLAB_APP_NAME;
}

mongoose.connect(connectionString);