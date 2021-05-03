const canvas = document.getElementById("canvas");
const vida = document.getElementById("vida");
vida.width = 25;
vida.height = 25;

canvas.width = 1000;
canvas.height = 800;

const ctx = canvas.getContext("2d");
ctx.beginPath()

for (var i = 0; i != 9 ; i++) {
    for (var j = 1; j != 6 ; j++) {

          ctx.rect(((i*110)+5) ,((j-1)*50)+ 5*j, 110, 50);
          ctx.fillStyle = 'red';
          ctx.fill();
          ctx.stroke();
 }
}
ctx.closePath();

// La barra del jugador:

var bar = {
    x: 450,
    y: 700,
    vx: 5,
    vy: 2,
    draw: function() {
        ctx.beginPath(),
        ctx.rect(this.x,this.y , 100, 10),
        ctx.fillStyle = 'green',
        ctx.fill(),
        ctx.stroke(),
        ctx.closePath
    }
};



ctx.beginPath();
ctx.arc(450, 500, 10, 0, 2 * Math.PI)
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "25px Arial";
ctx.fillText("Puntuacion:", 30, 770);
ctx.closePath();

vida.onload = ()=> {
    ctx.drawImage(vida,800,750);  
    ctx.drawImage(vida,825,750);  
    ctx.drawImage(vida,850,750); 
};
  
var izquierda = document.getElementById("a");
var derecha = document.getElementById("d");

izquierda.onclick = () => {
    bar.x = bar.x - 20;
}

derecha.onclick = () => {
    bar.x = bar.x + 20;
}

function update() 
{
  
  bar.draw();
  requestAnimationFrame(update);
}

update();