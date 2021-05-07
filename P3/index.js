const canvas = document.getElementById("canvas");
const vida = document.getElementById("vida");
var puntuacion = 0;
var vidas = 3;
vida.width = 25;
vida.height = 25;

canvas.width = 1000;
canvas.height = 800;
const ctx = canvas.getContext("2d");


var ESTADO = 0; // 0 preparado para iniciar el juego , 1 en juego , 2 GAMEOVER

// puntuacion
function puntuacion_draw(){
  ctx.clearRect(30, 500 , 180,270);
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.font = "25px Arial";
  ctx.fillText("Puntuacion: " + puntuacion.toString(), 30, 770);
  ctx.closePath();
}


function texto(t ,x, z){
  ctx.clearRect(400, z , 300,300);
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.font = x + "px Arial";
  ctx.fillText(t, 460 - (x*t.length/5), z);
  ctx.closePath();
}


function borrar_texto(){
 ctx.clearRect(0, 300 , 900,300);
}


puntuacion_draw();

var ball = {
    width: 10,
    height:10,
    x: 400 ,
    y: 500 , 
    vx: 0,
    vy: 0,
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
    height: 20,  
    visible: true ,
    
}

//function ladrillos_init

var padding_x = (1000 - (LADRILLO.C * LADRILLO.width))/ (LADRILLO.C + 1);
var padding_y = (300 - (LADRILLO.F * LADRILLO.height))/ (LADRILLO.F + 1);


var ladrillos = [];
function ladrillos_init(){ 

ladrillos = [];

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
}
ladrillos_init();

var eliminar = false;

function colision(obj1 ,obj2){
    if(obj2.x >= obj1.x  &&  obj2.x <= obj1.x + obj1.width){
        ///Aqui, meterle caña
        if(obj2.y + obj2.width >= obj1.y  &&  obj2.y - obj2.width <= obj1.y + obj1.height){
            eliminar = true;
            obj2.vx = 1* obj2.vx;
            obj2.vy = -1* obj2.vy;
        }
    }
    
}

function ladrillo_draw() {
    for (let i = 0; i < LADRILLO.F; i++) {
        for (let j = 0; j < LADRILLO.C; j++) {   
          ctx.clearRect(ladrillos[i][j].x, ladrillos[i][j].y -2, LADRILLO.width + 2,LADRILLO.height + 4);
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
    vx: 8,
    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x,this.y , this.width, this.height);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
};


//Vidas
function vidas_load(){
ctx.clearRect(790,750 , 100,20);
var vida_pos = [800 , 825 ,850];
  for(i = 0 ; i < vidas ; i++){
    ctx.drawImage(vida,vida_pos[i],750);  
  }
}
vidas_load();

function start(){
  ball.x = 400 ;
  ball.y = 500 ; 
  ball.vx = 5;
  ball.vy = -3;
}



function reset(){
  ESTADO = 0;
  vidas = 3;
  puntuacion = 0;
  vidas_load();
  puntuacion_draw();
  ladrillos_init();
  texto("Breakout" ,100 ,400);
  texto("pulsa [space] para comenzar" ,50 ,500);
}
reset();

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

  if (ESTADO == 0 && e.keyCode == 32){
    borrar_texto();
    start();
    ESTADO = 1;
  }else if (ESTADO == 2 && e.keyCode == 32){
    reset();
  }

}
  
window.onkeyup = (e) => {
    n = 0;
  }



function perder(){
    if (ball.y >= 800 + ball.width){
      vidas = vidas -1;
      console.log(vida);
      vidas_load();
      ball.vy = 0;
      ball.vx = 0;
      ball.y = -500;
      ESTADO = 0;
      if (vidas <= 0 ){
        ESTADO = 2
        texto("game over" ,100 ,400);
        texto("pulsa [space] para reintentar" ,50 ,500);
      }
      else{
        texto("-1 VIDA" ,100 ,400);
        texto("pulsa [space] para continuar" ,50 ,500);
      }
    }
}



function update() 
{
  ladrillo_draw();
  bar.draw();
  ball.draw();
  colision(bar,ball);
  perder();
  requestAnimationFrame(update);
}

update();