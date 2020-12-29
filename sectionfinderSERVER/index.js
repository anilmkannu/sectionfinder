require('./config/config');
require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:4200"}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(__dirname+"./public"))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(require('./router'));



app.listen(process.env.PORT, () => { console.log("Server is running on port", process.env.PORT)});