var path = require('path'),    
rootPath = path.normalize(__dirname + '/..'),    
env = process.env.NODE_ENV || 'development';

var config = {  
development: {    
            root: rootPath,    
            app: {      name: 'Chirps'      },    
            port: 5000,
            db: 'mongodb://127.0.0.1/chirps-dev',
            secret:"cayennedlikedhistreats" ,
            uploads: rootPath + "/public/uploads/"
 },  
 production: {    
              root: rootPath,    
              app: {      name: ' ToDo'    },    
              port: 80, },
              db: 'mongodb://127.0.0.1/todo',
              uploads: rootPath + "/public/uploads/"
  };
  
module.exports = config[env];
