var speed = 10;
var Score = 0;
// car_speed();
plusscore();
window.addEventListener("keydown", e => {
    switch(e.key){
        case "Shift" :
            case "ArrowUp" :
            input.F -= speed;
            if (input.F <= -10) {
              input.F = -10;
            }
            break
        case "ArrowDown":
            input.F += speed;
            if (input.F >= 510) {
              input.F = 510;
            }
            break
        case "ArrowLeft":
            input.N -= speed;
             if (input.N <= 120) {
                 input.N = 120;
            }
            break
        case "ArrowRight":
            input.N += speed;
             if (input.N >= 400) {
                 input.N = 400;
            }
            break
        case "w":
            // if (speed < 10){
            //     speed += 1;
            //     document.getElementById("speed1").innerHTML = "Car.speed : " + speed;
            // }
              break
        case "s":
            // if (speed > 5){
            //     speed -= 1;
            //     document.getElementById("speed1").innerHTML = "Car.speed : " + speed;
            // }
              break
        case "S":
              document.getElementById("game-setting").style.display = "block"
              break
        case "d":
              input.N += 5;
               if (input.N >= 400) {
                   input.N = 400;
              }
    }
});
// function car_speed (){
//     document.getElementById("speed1").innerHTML = "Car.speed : " + speed;
// } 
function plusscore (){
    document.getElementById("score").innerHTML = "Score: " + Score ;
    window.requestAnimationFrame(plus);
}
function plus (){
    Score++;
    window.requestAnimationFrame(plus);
    document.getElementById("score").innerHTML = "Score: " + Score;
}
