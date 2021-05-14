//-- Obtener elementos del DOM


const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const boton_gris = document.getElementById('gris');
const ctx = canvas.getContext('2d');


img.onload = function () {
  ctx.drawImage(img, 0,0 );
};
canvas.width = img.width;
canvas.height = img.height;
ctx.drawImage(img, 0,0 );
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

let data = imgData.data;
console.log(data[0]);
let Estado_gris = 0;
const original_colors = data.slice();


boton_gris.onclick = () => {
    if (Estado_gris == 0){
      boton_gris.style.backgroundColor= "orange";

      for (let i = 0; i < data.length; i+=4) {
        data[i] = 255;
      }
      ctx.putImageData(imgData,0, 0 );
      Estado_gris = 1;
    }
    else{
      boton_gris.style.backgroundColor= "blue";
      data = original_colors.slice();
      ctx.putImageData(imgData, 0, 0);
      Estado_gris = 0;
    }

}
