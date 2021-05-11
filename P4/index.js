//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imgData.data

img.onload = function () {
  console.log("Imagen cargada");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0 ,img.width,img.height);
};