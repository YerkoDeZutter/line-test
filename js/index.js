var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

let lineSize = 10;

for( var y = 0 ; y < canvas.height/lineSize ; y++ ){
  for( var x = 0 ; x < canvas.width/lineSize ; x++ ){

    if(Math.random() <= .5){
      c.beginPath();
      c.moveTo((lineSize*x), (lineSize*y));
      c.lineTo((lineSize*x)+lineSize, (lineSize*y)+lineSize);
      c.stroke();
    } else {
      c.beginPath();
      c.moveTo((lineSize*x)+lineSize, (lineSize*y));
      c.lineTo((lineSize*x), (lineSize*y)+lineSize);
      c.stroke();
    }

  }
}
