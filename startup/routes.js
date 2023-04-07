const express = require('express');
const captcha = require('../routes/captcha');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/captcha', captcha);
  
}