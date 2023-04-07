const winston = require("winston");
//const express = require("express");
const app = require("https-localhost")("kian.amir.com")
require("dotenv").config();

//const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);

const port = process.env.PORT || 3900;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
