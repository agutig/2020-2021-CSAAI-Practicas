const canvas = document.getElementById("canvas");
const vida = document.getElementById("vida");
var puntuacion = 0;
vida.width = 25;
vida.height = 25;

canvas.width = 1000;
canvas.height = 800;
const ctx = canvas.getContext("2d");

// puntuacion
function puntuacion_draw(){
  ctx.clearRect(30, 500 , 180,270);
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.font = "25px Arial";
  ctx.fillText("Puntuacion: " + puntuacion.toString(), 30, 770);
  ctx.closePath();
}

puntuacion_draw();

var ball = {
    width: 10,
    height:10,
    x: 400 ,
    y: 500 , 
    vx: 5,
    vy: 2,
    draw: function() {

        ctx.clearRect(this.x -11 ,this.y -11, 22,22);

        if (this.x < 0 || this.x >= (canvas.width - 10) ) {
            this.vx = -1  * this.vx;
          }
        
        if (this.y <= 0) {
            this.vy = -1  * this.vy;
          }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();            
    }
};

var LADRILLO = {
    F: 5,   
    C: 9,   
    width: 100,  //El padding se calcula solo solo hace falta rellenar estos parametros
    height: 40,  
    visible: true ,
    
}
var padding_x = (1000 - (LADRILLO.C * LADRILLO.width))/ (LADRILLO.C + 1);
var padding_y = (300 - (LADRILLO.F * LADRILLO.height))/ (LADRILLO.F + 1);
var ladrillos = [];
 
for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = []; 
 
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
        x: ((LADRILLO.width + padding_x) * j) + padding_x,
        y: (LADRILLO.height + padding_y) * i + padding_y,
        width: LADRILLO.width,
        height: LADRILLO.height,
        visible: LADRILLO.visible
        
      };
    }
}

var eliminar = false;

function colision(obj1 ,obj2){
    if(obj2.x >= obj1.x  &&  obj2.x <= obj1.x + obj1.width){
        ///Aqui, meterle caña
        if(obj2.y + obj2.width >= obj1.y  &&  obj2.y - obj2.width <= obj1.y + obj1.height){
            eliminar = true;
            obj2.vx = -1* obj2.vx;
            obj2.vy = -1* obj2.vy;
        }
    }
    
}

function ladrillo_draw() {
    for (let i = 0; i < LADRILLO.F; i++) {
        for (let j = 0; j < LADRILLO.C; j++) {   
          ctx.clearRect(ladrillos[i][j].x, ladrillos[i][j].y , LADRILLO.width + 2,LADRILLO.height + 2);
          eliminar = false;
          if (ladrillos[i][j].visible == true) {
            colision(ladrillos[i][j] , ball);
            if (eliminar == true){
              ladrillos[i][j].visible = false;
              eliminar = false;
              puntuacion = puntuacion + 10;
              puntuacion_draw();
            }
            ctx.beginPath();
            ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.width, LADRILLO.height);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.closePath();
          }
        }
    }
}





// La barra del jugador:

var bar = {
    x: 450,
    y: 700,
    width: 100,
    height:10,
    vx: 2,
    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x,this.y , this.width, this.height);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
};




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
  ladrillo_draw();
  bar.draw();
  ball.draw();
  colision(bar,ball);
  requestAnimationFrame(update);
}

update();