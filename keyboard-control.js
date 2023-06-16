window.addEventListener("keydown", e => {
    switch(e.key){
        case "ArrowUp":
            input.F -= 5;
            if (input.F <= -10) {
              input.F = -10;
            }
            break
        case "ArrowDown":
            input.F += 5;
            if (input.F >= 510) {
              input.F = 510;
            }
            break
        case "ArrowLeft":
            input.N -= 5;
             if (input.N <= 120) {
                 input.N = 120;
            }
            break
        case "ArrowRight":
            input.N += 5;
             if (input.N >= 400) {
                 input.N = 400;
            }
            break
        case "w":
              break
        case "s":
              input.F += 5;
              if (input.F >= 510) {
                input.F = 510;
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