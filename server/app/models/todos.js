var Mongoose = require ('mongoose');
var Schema = Mongoose.Schema;

var TodoSchema = new Schema({
    user:{type: Schema.Types.ObjectId, required: true},
    todo: { type: String, required: true},
    description: {type: String},
    dateCreated: {type: Date, default: Date.now},
    dateDue: {type: Date, default: Date.now},
    completed: { type: Boolean, default: false},
    priority: {type: String,  required: ['Low', 'Medium', 'High', 'Critical']},
    file: {fileName: String, originalNames:String}

});

module.exports= Mongoose.model('Todo', TodoSchema);

