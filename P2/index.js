const gui = {

    botonExp : document.getElementById("E"),
    botonPunto : document.getElementById("."),
    boton_numeric : document.getElementsByClassName("numeric"),
    botonDEL : document.getElementById("DEL"),
    botonAC : document.getElementById("AC"),
    botonX : document.getElementById("X"),
    botonDIV : document.getElementById("%"),
    botonPLUS : document.getElementById("+"),
    botonMINUS : document.getElementById("-"),
    botonANS : document.getElementById("ANS"),
    botonEQUAL : document.getElementById("="),
    display : document.getElementById("display")

};

function register_click (invalue){
    x = display.innerHTML;
    x = x + invalue;
    display.innerHTML = x;
    console.log('Gracias por pinchar');
};

console.log(gui.boton_numeric);

function digito(value)
{
  console.log("Valor: " + value);
}

for (let boton of gui.boton_numeric) {
    boton.onclick = (ev) => {
        digito(ev.target.value)
      }
}

