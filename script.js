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
  var v = 150;
  var k = 0;
  // ********SIZE.4******** \\
  var N = 200;
  var F = 500;
  // var container = $("#container");

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
  var images4 = new Image();
  images4.src = "./images/cars4.png";

  function draw() {
    // **********1********* \\
    context.clearRect(0, 0, 600, 760);
    context.drawImage(images1, x, y, 60, 120);
    y += 20;
    if (y >= 700) {
      y = -100;
    }
    // **********2********* \\
    context.beginPath();
    context.drawImage(images2, a, p, 60, 120);
    p -= 22;
    if (p <= -100) {
      p = 700;
    }
    // **********3********* \\
    context.beginPath();
    context.drawImage(images3, v, k, 60, 120);
    k += 22;
    if (k >= 700) {
      k = -100;
    }
    // **********4********* \\
    context.beginPath();
    context.drawImage(images4, N, F, 60, 120);
    if (left){
      N -= 20;
      if (N <= 120) {
        N = 120;
      }
    }
    if (right){
      N += 20;
      if (N >= 400) {
        N = 400;
      }
    }
  }
  setInterval(draw, 50);
};
function top1() {
  left = true;
  right = false;
}
function wealth() {
  right = true;
  left = false;
}
