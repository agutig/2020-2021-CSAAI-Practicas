//----- Obtener elemento de video y configurarlo
let directo = document.getElementById("directo");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const btn_video1 = document.getElementById("btn_video1");
const btn_video2 = document.getElementById("btn_video2");
const btn_test = document.getElementById("btn_test");
const btn_src_on = document.getElementById("btn_src_on");


directo.width=420;
directo.height=200;
video1.width=200;  
video1.height=100;
video2.width=200;  
video2.height=100;

/* ESTADOS
ESTADO = 0 --> no se está retransmitiendo nada y en el vídeo superior se muestra la imagen de test 
ESTADO = 1--> El otro es cuando las fuentes están activadas
*/
var ESTADO = 0;
const TEST_IMAGE_URL = "https://raw.githubusercontent.com/myTeachingURJC/2020-2021-CSAAI/main/L12/Ejemplos/test.png";
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;

btn_src_on.onclick = () => {

  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video1.currentTime = 0;
  video1.play();
  video1.muted;

  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video2.currentTime = 0;
  video2.play();
  video2.muted;

  directo.poster = TEST_IMAGE_URL;
  ESTADO = 1;
};

//-- Botón de Test
btn_test.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//-- Botón de Selección de la cámara 1
btn_video1.onclick = () => {

    if (ESTADO != 0) {
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
    }
};

btn_video2.onclick = () => {

    if (ESTADO != 0) {
    directo.src = video2.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
    }
};
