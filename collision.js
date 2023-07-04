// =============={ هذا هو المسؤول عن الخسارة }============== //
window.requestAnimationFrame(collision);
var y_handler = true;
function collision (){
if (input.y == cars3.y){
  alert("h");
  Coin = 0;
}
 window.requestAnimationFrame(collision);
}