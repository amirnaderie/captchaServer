/* app.js */

const captchaLib = require("../middleware/captchaLib");
const express = require("express");
const router = express.Router();
//var captchas = [];

router.post("/validateCaptcha", (req, res) => {
  try {
    if (!req.headers.cookie) {
      res.status(400).send(false);
      return;
    }
    const captchaText = req.body.value;
    const cookie = req.headers.cookie.substring(
      req.headers.cookie.indexOf("=") + 1,
      req.headers.cookie.length
    );

    global.client.get(cookie, function (err, captchacontent) {
      if(captchacontent) {
        if (captchacontent.toLowerCase() === captchaText.toLowerCase())
          res.status(200).send(true);
        else res.status(200).send(false);
         
      } else {
          res.status(400).send(false);
          
      }
  });

   
  } catch (error) {
    res.status(400).send(false);
  }
  
});

router.post("/:width?/:height?/",async (req, res) => {
  const token = req.body.token;
  
  if (!token) {
    res.status(400).send("token is not provided.");
    return;
  }
  const width = parseInt(req.params.width) || 200;
  const height = parseInt(req.params.height) || 50;
  const { image, text, cookie } = captchaLib(width, height, token);
  res.setHeader("Set-Cookie", cookie);
  
  res.send({ image, textlen: text.length });
});

module.exports = router;
