
var express = require('express'),
router = express.Router(),
logger = require ('../../config/logger'),
mongoose = require ('mongoose'),
todos = mongoose.model('Todo');



module.exports = function (app, config){
app.use('/api', router);
}