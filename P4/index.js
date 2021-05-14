//-- Obtener elementos del DOM


const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
const boton_gris = document.getElementById('gris');
const boton_colores = document.getElementById('colores');
const deslizador_r = document.getElementById('deslizador_r');
const deslizador_g = document.getElementById('deslizador_g');
const deslizador_b = document.getElementById('deslizador_b');

img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0 );
};

let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imgData.data;
const original_colors = data.slice();
let colored = data.slice();
let Estado_gris = 0;
let Estado_colores = 0;

function gray_maker (){
  for (let i = 0; i < data.length; i+=4) {
    brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
    data[i] =  brillo ; 
    data[i+1] = brillo ;
    data[i+2] = brillo ;
  }
}

function reset (){

    data = original_colors.slice();
    ctx.putImageData(imgData, 0, 0);

}

boton_gris.onclick = () => {
  ctx.drawImage(img, 0,0 );
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  Estado_colores= 0;
  boton_colores.style.backgroundColor= "white";
  reset;
    if (Estado_gris == 0){
      boton_gris.style.backgroundColor= "orange";

      //CODIGO PARA LA MODIFICACION DE LA IMAGEN
      gray_maker();

      ctx.putImageData(imgData,0, 0);
      Estado_gris = 1;
    }
    else{
      boton_gris.style.backgroundColor= "white";
      data = original_colors.slice();
      ctx.putImageData(imgData, 0, 0);
      Estado_gris = 0;
    }

}


boton_colores.onclick = () => {
  ctx.drawImage(img, 0,0 );
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  Estado_gris = 0;
  boton_gris.style.backgroundColor= "white";
  reset;
    if (Estado_colores == 0){
      boton_colores.style.backgroundColor= "orange";
      red_thresh();
      green_thresh();
      blue_thresh();
      ctx.putImageData(imgData, 0, 0);
      Estado_colores = 1;
    }
    else{
      boton_colores.style.backgroundColor= "white";
      data = original_colors.slice();
      ctx.putImageData(imgData, 0, 0);
      Estado_colores = 0;
    }

}

function red_thresh(){
  range_value.innerHTML = deslizador_r.value;
  ctx.drawImage(img, 0,0);
  umbral = deslizador_r.value;
  for (let i = 0; i < data.length; i+=4) {
      if (data[i] > umbral){
          data[i] = umbral;
       }
}
colored = data.slice();
ctx.putImageData(imgData, 0, 0);
}

function green_thresh(){
  range_value.innerHTML = deslizador_g.value;
  ctx.drawImage(img, 0,0);
  umbral = deslizador_g.value;
  for (let i = 0; i < data.length; i+=4) {
      if (data[i+1] > umbral){
          data[i+1] = umbral;
       }
  }

colored = data.slice();
ctx.putImageData(imgData, 0, 0);
}



function blue_thresh(){
  range_value.innerHTML = deslizador_b.value;
  ctx.drawImage(img, 0,0);
  umbral = deslizador_b.value;
  for (let i = 0; i < data.length; i+=4) {
      if (data[i+2] > umbral){
          data[i+2] = umbral;
       }
  }
  colored = data.slice();
ctx.putImageData(imgData, 0, 0);
}


deslizador_r.oninput = () => {
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  if (Estado_colores == 1) {
    red_thresh();
 }
}

deslizador_g.oninput = () => {
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  if (Estado_colores == 1) {
    green_thresh();
 }
}

deslizador_b.oninput = () => {
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  if (Estado_colores == 1) {
    blue_thresh();
 }
}