//-- Obtener elementos del DOM


const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
const boton_gris = document.getElementById('gris');
const boton_colores = document.getElementById('colores');

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
let Estado_colores = 0;

function gray_maker (){
  for (let i = 0; i < data.length; i+=4) {
    brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
    data[i] =  brillo ; 
    data[i+1] = brillo ;
    data[i+2] = brillo ;
  }
}

boton_gris.onclick = () => {
  ctx.drawImage(img, 0,0 );
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  Estado_colores= 0;
  boton_colores.style.backgroundColor= "white";
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
    if (Estado_colores == 0){
      boton_colores.style.backgroundColor= "orange";

      ctx.putImageData(imgData,0, 0);
      Estado_colores = 1;
    }
    else{
      boton_colores.style.backgroundColor= "white";
      data = original_colors.slice();
      ctx.putImageData(imgData, 0, 0);
      Estado_colores = 0;
    }

}
