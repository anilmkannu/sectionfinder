require('./config/config');
require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
// const Logger = require('./utils/logger');
// const logger = new Logger();
const app = express();
app.use(cors({ origin: "http://localhost:4200"}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//app.use(require('method-override')());

const swagger = require('./utils/swagger');

// process.on('SIGINT', () => {
//   logger.log('stopping the server', 'info');
//   process.exit();
// });

//app.use('/api', swagger.router);
app.use(require('./router'));

// app.use((req, res, next) => {
//   logger.log(
//     `the url :  ${
//       req.originalUrl
//     } you are trying to reach is not hosted on our server`,
//     `error`
//   );
//   const err = new Error('Not Found');
//   err.status = 404;
//   res
//     .status(err.status)
//     .json({
//       type: 'error',
//       message: 'the url you are trying to reach is not hosted on our server'
//     });
//   next(err);
// });

app.listen(process.env.PORT, () => { console.log("Server is running on port", process.env.PORT)});