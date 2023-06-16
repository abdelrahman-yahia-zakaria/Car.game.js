var lo = 5;
window.addEventListener("keydown", e => {
    switch(e.key){
        case "ArrowUp":
            input.F -= lo;
            if (input.F <= -10) {
              input.F = -10;
            }
            break
        case "ArrowDown":
            input.F += lo;
            if (input.F >= 510) {
              input.F = 510;
            }
            break
        case "ArrowLeft":
            input.N -= lo;
             if (input.N <= 120) {
                 input.N = 120;
            }
            break
        case "ArrowRight":
            input.N += lo;
             if (input.N >= 400) {
                 input.N = 400;
            }
            break
        case "w":
            if (lo < 10){
                lo += 1;
            }
              break
        case "s":
            if (lo > 5){
                lo -= 1;
            }
              break
        case "a":
              input.N -= 5;
               if (input.N <= 120) {
                   input.N = 120;
              }
              break
        case "d":
              input.N += 5;
               if (input.N >= 400) {
                   input.N = 400;
              }
    }
});