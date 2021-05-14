//-- Obtener elementos del DOM


const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
const boton_gris = document.getElementById('gris');

img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0 );
};

let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imgData.data;
console.log(data);
const original_colors = data.slice();
let Estado_gris = 0;


function gray_maker (){

}

boton_gris.onclick = () => {
  ctx.drawImage(img, 0,0 );
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;

    if (Estado_gris == 0){
      boton_gris.style.backgroundColor= "orange";

//CODIGO PARA LA MODIFICACION DE LA IMAGEN
      gray_maker();
//////////////////////////////////////////
      ctx.putImageData(imgData,0, 0);
      Estado_gris = 1;
    }
    else{
      boton_gris.style.backgroundColor= "blue";
      data = original_colors.slice();
      ctx.putImageData(imgData, 0, 0);
      Estado_gris = 0;
    }

}
