/* captcha.js */

const { createCanvas } = require("canvas");

const FONTBASE = 200;
const FONTSIZE = 35;

// Get a font size relative to base size and canvas width
const relativeFont = (width) => {
  //const ratio = FONTSIZE / FONTBASE;
  //const size = width * ratio;
  const size = getRandomInt(30, 40) ;
  return `${size}px serif`;
};

// Get a float between min and max
const arbitraryRandom = (min, max) => Math.random() * (max - min) + min;

const getRandomInt=(min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Get a rotation between -degrees and degrees converted to radians
const randomRotation = (degrees = 5) =>
  (arbitraryRandom(-degrees, degrees) * Math.PI) / 180;

// https://gist.github.com/wesbos/1bb53baf84f6f58080548867290ac2b5
const alternateCapitals = (str) =>
  [...str]
    .map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]())
    .join("");

// Get a random string of alphanumeric characters
const randomText = () =>
  alternateCapitals(Math.random().toString(36).substring(2, 8));

// Configure captcha text
const configureText = (ctx, width, height) => {
  ctx.font = relativeFont(width);
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  const text = randomText();
  ctx.fillText(text, width / 2, height / 2);
  return text;
};

// Get a PNG dataURL of a captcha image
const generate = (width=200, height=50,token) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = 'purple';
  ctx.beginPath(), ctx.moveTo(getRandomInt(5, 20), getRandomInt(5, 20)), ctx.lineTo(width - getRandomInt(5, 20), height - getRandomInt(5, 20)), ctx.stroke(), ctx.moveTo(getRandomInt(15, 30), getRandomInt(15, 30)), ctx.lineTo(width - getRandomInt(15, 30), height - getRandomInt(15, 30)), ctx.stroke(), ctx.moveTo(getRandomInt(5, 20), height - getRandomInt(5, 20)), ctx.lineTo(width - getRandomInt(5, 20), getRandomInt(5, 20)), ctx.stroke(), ctx.moveTo(getRandomInt(15, 30), height - getRandomInt(15, 30)), ctx.lineTo(width - getRandomInt(15, 30), getRandomInt(15, 30)), ctx.stroke(), ctx.moveTo(getRandomInt(width / 10, width / 10 + 10), height - getRandomInt(15, 30)), ctx.lineTo(getRandomInt(width / 2, width / 2 + 10), getRandomInt(5, 20)), ctx.stroke(), ctx.closePath();
  ctx.rotate(randomRotation());
  const text = configureText(ctx, width, height);
  return {
    image: canvas.toDataURL(),
    text: text,
    cookie:setCookie('captchaCookie',token,2)
  };
};

function setCookie(cname, cvalue, minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (minutes*60*1000));
    var expires = "Expires="+ d.toUTCString();
    return( cname + "=" + cvalue + ";" + expires + "; HttpOnly; SameSite=None; Secure");
}

module.exports = generate;
