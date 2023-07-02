var right = false;
var left = false;
var dcc = true;
var game = false;
let input = { x : 150, y : 500 };
let cars3 = { x : 150, y : 0 };
var car = 1;
var h = 0;
var t = 0;

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  // ********SIZE.1******** \\
  var x = 400;
  var y = 0;
  // ********SIZE.2******** \\
  var a = 320;
  var p = 0;
  // ********SIZE.3******** \\
  var p = 5;

  // ********PNG.1******** \\
  var images1 = new Image();
  images1.src = "./images/cars1.png";
  // ********PNG.2******** \\
  var images2 = new Image();
  images2.src = "./images/cars2.png";
  // ********PNG.3******** \\
  var images3 = new Image();
  images3.src = "./images/cars3.png";
  // ********PNG.4******** \\
  var images5 = new Image();
  images5.src = "./images/background.png";

  function draw() {
  // ********PNG.4******** \\
  var images4 = new Image();
  var i = document.getElementById("car").src;
  images4.src = i;
  // document.getElementById("move").src = i;
    context.clearRect(0, 0, 600, 760);
    context.drawImage(images5, h, t, 600, 760);
    t += 20;
    if (t === 100){
      t = 0;
    }
    // **********1********** \\
    context.beginPath();
    context.drawImage(images1, x, y, 60, 120);
    if (game){
    y += 20;
    if (y >= 700) {
      y = -100;
    }
  }
    // **********2********* \\
    context.beginPath();
    context.drawImage(images2, a, p, 60, 120);
    if (game){
    p -= 22;
    if (p <= -100) {
      p = 700;
    }
  }
    // **********3********* \\
    context.beginPath();
    context.drawImage(images3, cars3.x, cars3.y, 60, 120);
    if (game){
    cars3.y += 22;
    if (cars3.y >= 700) {
      cars3.y = -100;
    }
  }
    // **********4********* \\
    context.beginPath();
    context.drawImage(images4, input.x, input.y, 60, 120);
    // context.fillText("me", input.x, input.y);
    // context.font = "30px Arial";
    document.getElementById("move").style.top = input.y - 50;
    document.getElementById("move").style.left = input.x + 264;

    // *********5********* \\

    }
  setInterval(draw, 50);
};
var display = "none";
function plus_game_ovar (){
  p = document.getElementById("Game-ovar");
  p.style.display = display;
  window.requestAnimationFrame(plus_game_ovar);
}
window.requestAnimationFrame(plus_game_ovar);

// This changes the car whenever the right or left arrow button is pressed //
window.requestAnimationFrame(change_the_car);
function change_the_car (){
  if (car === 1){
    document.getElementById("car").src = "./images/cars4.png"
  }
  if (car === 2){
    document.getElementById("car").src = "./images/cars3 - Copy.png"
  }
  if (car === 3){
    document.getElementById("car").src = "./images/cars2.png"
  }
  if (car === 4){
    document.getElementById("car").src = "./images/cars1 - Copy.png"
  }
  window.requestAnimationFrame(change_the_car);
}

function start4 (){
  document.getElementById("canvas").style.display = "block"
  document.getElementById("move").style.display = "block"
  document.getElementById("Home").style.display = "none"
  game = true;
  setInterval(plus,1000);
  dcc = false;
}