//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const boton_gris = document.getElementById('gris');
let Estado_gris = 0;
const ctx = canvas.getContext('2d');
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imgData.data;
console.log(canvas.width);
console.log(canvas.height);
const original_colors = data.slice();

img.onload = function () {
  console.log("Imagen cargada");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0 ,img.width,img.height);
};

function gray_er(){
  for (let i = 0; i < data.length; i+=4) {
     
      data[i] =  data[i] +10; 
      data[i+1] = data[i+1] + 10;
      data[i+2] = data[i+2] +10;
  }

}

boton_gris.onclick = () => {
    if (Estado_gris == 0){
      boton_gris.style.backgroundColor= "orange";
      gray_er();
      ctx.putImageData(imgData,0, 0 );
      Estado_gris = 1;
    }
    else{
      boton_gris.style.backgroundColor= "gray";
      data = original_colors.slice();
      ctx.putImageData(imgData, 0, 0);
      Estado_gris = 0;
    }

}
