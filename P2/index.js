const gui = {

    botonExp : document.getElementById("E"),
    botonPunto : document.getElementById("."),
    boton_numeric : document.getElementsByClassName("numeric"),
    botonDEL : document.getElementById("DEL"),
    botonAC : document.getElementById("AC"),
    boton_operator : document.getElementsByClassName("operator"),
    botonANS : document.getElementById("ANS"),
    botonEQUAL : document.getElementById("="),
    display : document.getElementById("display")

};

gui.botonDEL.onclick = function () {
    gui.display.innerHTML.length = gui.display.innerHTML.length -1 ;
}

gui.botonAC.onclick = function () {
    gui.display.innerHTML = "";
}

function register_click (invalue){
    x = display.innerHTML;
    x = x + invalue;
    display.innerHTML = x;
    console.log('Gracias por pinchar');
};

console.log(gui.boton_numeric);

for (let boton of gui.boton_numeric) {
    boton.onclick = (ev) => {
        register_click(ev.target.value)
      }
}

for (let boton of gui.boton_operator) {
    boton.onclick = (ev) => {
        register_click(ev.target.value)
      }
}