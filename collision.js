// =============={ هذا هو المسؤول عن الخسارة }============== //
window.requestAnimationFrame(collision);
var y_handler = true;
function collision (){
if (y_handler){
 if (input.y == cars3.y){ 
    if (input.x == cars3.x){
      alert("go");
      Coin = -1;
    }
 }
}
 window.requestAnimationFrame(collision);
}