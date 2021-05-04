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
    width: 100,
    height:10,
    vx: 2,
    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x,this.y , this.with, this.height);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
};

function colision(obj1 ,obj2){
    for (i1 = obj1.x ; i1 != obj1.x + obj1.width ; i1++){
        for (j1 = obj2.x ; j1= obj2.x + obj2.width ; j1++){
            if (i1 == j1){
                for(i2 = obj1.y ; i2 != obj1.y + obj1.width ; i2++){
                    for (j2 = obj2.x ; j2= obj2.x + obj2.width ; j2++){
                        if (i2 == j2){
                            obj2.vx = - 1* obj2.vx
                            obj2.vy = - 1* obj2.vy
                        }
                    }
                }
            }
        }
    }
}

var ball = {
    x_center: 400,
    y_center: 500,
    width: 10,
    height:10,
    x: 400 - this.width,
    y: 500 -  this.width, 
    vx: 5,
    vy: -2,
    draw: function() {

        ctx.clearRect(this.x_center -11 ,this.y_center -11, 22,22);

        if (this.x_center < 0 || this.x_center >= (canvas.width - 10) ) {
            this.vx = -1  * this.vx;
          }
        
        if (this.y_center <= 0) {
            this.vy = -1  * this.vy;
          }

        this.x_center = this.x_center + this.vx;
        this.y_center = this.y_center + this.vy;
        
        ctx.beginPath();
        ctx.arc(this.x_center, this.y_center, 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();            
    }
};


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
  
n = 0;
window.onkeydown = (e) => {
    n = n+1;
  if (e.keyCode == 37 || e.key == "a") {
        ctx.clearRect(bar.x -1 , bar.y -1  , 102,12);
        bar.x = bar.x - bar.vx - n;
   }


    if (e.keyCode == 39 || e.key == "d") {
        ctx.clearRect(bar.x -1 , bar.y -1 , 102,12);
            bar.x = bar.x + bar.vx + n;
        }
}
  
window.onkeyup = (e) => {
    n = 0;
  }



function update() 
{
  
  bar.draw();
  ball.draw();
  requestAnimationFrame(update);
}

update();