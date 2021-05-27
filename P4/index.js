//-- Obtener elementos del DOM


const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
const boton_gris = document.getElementById('gris');
const boton_colores = document.getElementById('colores');
const deslizador_r = document.getElementById('deslizador_r');
const deslizador_g = document.getElementById('deslizador_g');
const deslizador_b = document.getElementById('deslizador_b');
let text_red = document.getElementById('range_value_red');
let text_green = document.getElementById('range_value_green');
let text_blue = document.getElementById('range_value_blue');

img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0 );
};

let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imgData.data;
let data_copy = data.slice()
const original_colors = data.slice();
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
function visible_elements(){
  deslizador_r.style.display="block";
  deslizador_g.style.display="block";
  deslizador_b.style.display="block";
  text_red.style.display="block";
  text_green.style.display="block";
  text_blue.style.display="block";
}

function invisible_elements(){
  deslizador_r.style.display="none";
  deslizador_g.style.display="none";
  deslizador_b.style.display="none";
  text_red.style.display="none";
  text_green.style.display="none";
  text_blue.style.display="none";
}

boton_gris.onclick = () => {
  ctx.drawImage(img, 0,0 );
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  Estado_colores= 0;
  boton_colores.style.backgroundColor= "white";
  invisible_elements();
  //reset;
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
  //reset;
    if (Estado_colores == 0){
      boton_colores.style.backgroundColor= "orange";
      data_copy = data.slice();
      visible_elements();
      red_thresh();
      green_thresh();
      blue_thresh();
      ctx.putImageData(imgData, 0, 0);
      Estado_colores = 1;
    }
    else{
      boton_colores.style.backgroundColor= "white";
      invisible_elements();
      data = original_colors.slice();
      ctx.putImageData(imgData, 0, 0);
      Estado_colores = 0;
    }

}

function red_thresh(){
  ctx.drawImage(img, 0,0);

  text_red.innerHTML = "Umbral R: " + deslizador_r.value;
  umbral = deslizador_r.value;
  for (let i = 0; i < data.length; i+=4) {
      if (data_copy[i] > umbral){
          data[i] = umbral;
       }else{
        data[i] = data_copy[i];
     }
}
ctx.putImageData(imgData, 0, 0);
}

function green_thresh(){
  text_green.innerHTML = "Umbral G: " + deslizador_g.value;
  ctx.drawImage(img, 0,0);

  umbral = deslizador_g.value;
  for (let i = 0; i < data.length; i+=4) {
      if (data_copy[i+1] > umbral){
          data[i+1] = umbral;
       }else{
        data[i+1] = data_copy[i+1];
     }
  }

ctx.putImageData(imgData, 0, 0);
}



function blue_thresh(){
  text_blue.innerHTML = "Umbral B: " + deslizador_b.value;
  ctx.drawImage(img, 0,0);
  umbral = deslizador_b.value;
  for (let i = 0; i < data.length; i+=4) {
      if (data_copy[i+2] > umbral){
          data[i+2] = umbral;
       }else{
          data[i+2] = data_copy[i+2];
       }
  }
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