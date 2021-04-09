const gui = {

    botonExp : document.getElementById("E"),
    botonPunto : document.getElementById("."),
    boton_numeric : document.getElementById("numeric"),
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
    x = x + invalue
    display.innerHTML = x;
    console.log('Gracias por pinchar');
};

gui.boton_numeric.onclick = function(){console.log('Gracias por pinchar');
register_click(gui.boton_numeric.innerHTML)};

let numeric_values = [];

