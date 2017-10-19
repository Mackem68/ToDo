var Mongoose = require ('mongoose');
var Schema = Mongoose.Schema;

priorities = ['Low', 'Medium', 'High', 'Critical'];

var TodoSchema = new Schema({
    user:{type: Schema.Types.ObjectId, required: true},
    todo: { type: String, required: true},
    description: {type: String},
    dateCreated: {type: Date, default: Date.now},
    dateDue: {type: Date, default: Date.now},
    completed: { type: Boolean, default: false},
    priority: {type: String, enum: priorities},
    file: {fileName: String, originalNames:String}

});

module.exports=
    Mongoose.model('MyModel', mySchema);


var express = require('express'),
router = express.Router(),
logger = require ('../../config/logger'),
mongoose = require ('mongoose'),
todos = mongoose.model('todos');



module.exports = function (app, config){
app.use('/api', router);
}