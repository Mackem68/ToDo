var express = require('express'),
    router = express.Router(),
    logger = require ('../../config/logger'),
    mongoose = require ('mongoose'),
    User = mongoose.model('User');

var UserSchema= newSchema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})

module.exports = function (app, config){
    app.use('/api', router);
}