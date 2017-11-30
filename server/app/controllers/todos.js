
var express = require('express'),
router = express.Router(),
logger = require ('../../config/logger'),
mongoose = require ('mongoose'),
todos = mongoose.model('Todo'),
multer = require('multer'),
mkdirp = require('mkdirp');

module.exports = function (app, config){
app.use('/api', router);

var storage = multer.diskStorage({
	destination: function (req, file, cb) {      
	  	var path = config.uploads + req.params.userId + "/";
		mkdirp(path, function(err) {
			if(err){
				res.status(500).json(err);
			} else {
				cb(null, path);
			}
		});
    },
    filename: function (req, file, cb) {
		let fileName = file.originalname.split('.');   
		cb(null, fileName[0] + new Date().getTime() + "." + fileName[fileName.length - 1]);
    },
    router.post('/todos', function (req, res, next) {
        logger.log('Create User', 'verbose');
        var todos = new User(req.body);
        todos.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch( err => {
           return next(err);
        });
      }) router.get('/todos', function (req, res, next){
        logger.log('Get User', 'verbose');
        var query = todos.find()
          .sort(req.query.order)
          .exec()
          .then(result => {
               if(result && result.length) {
              res.status(200).json(result);
          } else {
              res.status(404).json({message: 'No users'});
          }
          })
          .catch(err => {
            return next(err);
          });
      }),
      router.get('/users/:userId', function(req, res, next){
                logger.log('Get user ' + req.params.userId, 'verbose');
        todos.findById(req.params.userId)
                    .then(user => {
                        if(user){
                            res.status(200).json(user);
                        } else {
                            res.status(404).json({message: "No user found"});
                        }
                    })
                    .catch(error => {
                        return next(error);
                    });
        router.put('/users/:userId', function(req, res, next){
                logger.log('Update user ' + req.params.userId, 'verbose');
                User.findOneAndUpdate({_id: req.params.userId}, 		req.body, {new:true, multi:false})
                    .then(user => {
                        res.status(200).json(user);
                    })
                    .catch(error => {
                        return next(error);
                    });
            });
            router.put('/users/password/:userId', function(req, res, next){
                logger.log('Update user ' + req.params.userId, 'verbose');
            
                todos.findById(req.params.userId)
                    .exec()
                    .then(function (user) {
                        if (req.body.password !== undefined) {
                            user.password = req.body.password;
                        }
            
                        todos.save()
                            .then(function (user) {
                                res.status(200).json(user);
                            })
                            .catch(function (err) {
                                return next(err);
                            });
                    })
                    .catch(function (err) {
                        return next(err);
                    });
            });
             
            router.delete('/todos/:userId', function(req, res, next){
                    logger.log('Delete user ' + req.params.userId, 'verbose');
                 todos.remove({ _id: req.params.userId })
                        .then(user => {
                            res.status(200).json({msg: "User Deleted"});
                        })
                        .catch(error => {
                            return next(error);
                        });
                });
            },





    router.post('/todos/upload/:userId/:todoId', upload.any(), function (req, res, next) {
        logger.log('Upload file for todo ' + req.params.todoId + ' and ' + req.params.userId, 'verbose');

        Todo.findById(req.params.todoId, function (err, todo) {
            if (err) {
                return next(err);
            } else {
                if (req.files) {
                    todo.file = {
                        filename: req.files[0].filename,
                        originalName: req.files[0].originalname,
                        dateUploaded: new Date()
                    };
                }
                todo.save()
                    .then(todo => {
                        res.status(200).json(todo);
                    })
                    .catch(error => {
                        return next(error);
                    });
            }
        });
    });
};
