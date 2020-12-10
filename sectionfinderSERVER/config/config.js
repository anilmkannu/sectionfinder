var env = process.env.NODE_ENV || 'development';
var config = require('./config.json');
var envConfig = config[env];

Object.keys(envConfig).forEach(key =>{
  process.env[key] = envConfig[key]
});


module.exports = {
  dbConnection: {
    mongoURI: process.env.DB_PR || "mongodb://localhost:27017/uiSection",
  },
  express: {
    port: process.env.EXPRESS_PORT || 3003,
    staticFilesPath: "./client/public",
  },
};


