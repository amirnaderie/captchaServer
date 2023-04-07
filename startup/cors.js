const cors = require("cors");

module.exports = function (app) {
  app.use(cors({
    origin: ["http://192.168.29.1:3000", "http://localhost:3000", "http://192.168.80.131", "http://192.168.80.129:3000"],
    // methods: ['GET', 'PUT', 'POST'],
    // allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
    // maxAge: 600,
    //exposedHeaders: ['*', 'Authorization']
  }));
};
