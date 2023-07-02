var speed = 10;
var Coin = 0;
// car_speed();
plusscore();
window.addEventListener("keydown", e => {
    switch(e.key){
        case "Shift" :
            case "ArrowUp" :
            if (game){
            input.y -= speed;
            if (input.y <= -10) {
              input.y = -10;
            }
          }
            break
        case "ArrowDown":
            if (game){
            input.y += speed;
            if (input.y >= 600) {
              input.y = 590;
            }
          }
            break
        case "ArrowLeft":
            if (game){
                input.x -= speed;
                if (input.x <= 120) {
                    input.x = 120;
               }
            }
            if (dcc){
             if (car > 1){
                 car--;
             }
            }

            break
        case "ArrowRight":
            if (game){
                input.x += speed;
                if (input.x >= 400) {
                    input.x = 400;
               }
            }
            if (dcc){
             if (car < 4){
                    car++;
             }
            }
            break
        case "w":
            // if (speed < 10){
            //     speed += 1;
            //     document.getElementById("speed1").innerHTML = "Car.speed : " + speed;
            // }
              break
        case "Enter":
              start4();
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
        case "Leftmouse":
              input.x += 5;
               if (input.x >= 400) {
                   input.x = 400;
              }
    }
});
// function car_speed (){
//     document.getElementById("speed1").innerHTML = "Car.speed : " + speed;
// } 
function plusscore (){
    document.getElementById("score").innerHTML = "Coin: " + Coin;
    // setInterval(plus,1000);
}
function plus (){
    Coin += 5;
    document.getElementById("score").innerHTML = "Coin: " + Coin;
}
