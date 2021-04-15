const gui = {

    botonExp : document.getElementById("E"),
    botonPunto : document.getElementById("."),
    boton_numeric : document.getElementsByClassName("numeric"),
    boton_operator : document.getElementsByClassName("operator"),
    botonDEL : document.getElementById("DEL"),
    botonAC : document.getElementById("AC"),
    botonANS : document.getElementById("ANS"),
    botonEQUAL : document.getElementById("="),
    display : document.getElementById("display"),
    warning_display : document.getElementById("warning_display")
};

let ESTADO = 0; /* 0= No hay nada escrito , 1= valor numerico , 2= operador , 3= segundo valor numerico
 (si se introducen mas operaciones se debe repetir el estado 2,3 )   */

let ANS = gui.display.innerHTML;

gui.botonEQUAL.onclick = () =>{
    gui.display.innerHTML = gui.display.innerHTML.replace(/x/g , "*")

    if(ESTADO == 3 || ESTADO == 1 ){
        gui.display.innerHTML = eval(display.innerHTML);
        ANS = gui.display.innerHTML;
        ESTADO == 1}
    else if(ESTADO == 0){
        gui.display.innerHTML = "0";
    } 
    else {
        gui.display.innerHTML = "ERROR";
    }
}

gui.botonDEL.onclick = () => {
    gui.display.innerHTML = gui.display.innerHTML.slice(0,-1) ;
}

gui.botonAC.onclick = function () {
    gui.display.innerHTML = "0";
}

function register_click (invalue){
    x = display.innerHTML;
    x = x + invalue;
    display.innerHTML = x;
};



console.log(gui.boton_numeric);

for (let boton of gui.boton_numeric) {
    boton.onclick = (ev) => {
        if (ESTADO == 0){
            gui.display.innerHTML = "";
            ESTADO = 1;
            register_click(ev.target.value)}
        else if (ESTADO == 2){
            ESTADO = 3;
            register_click(ev.target.value);
        }
        else {
            register_click(ev.target.value);
        }
      }
}

for (let boton of gui.boton_operator) {
    boton.onclick = (ev) => {
        register_click(ev.target.value)
        if (ESTADO == 1 || ESTADO == 3){
            ESTADO = 2;
        }
        else if (ESTADO == 0){
            gui.warning_display.innerHTML = "No puede haber un operador antes de un valor numerico, corrigelo por favor";
        }
        else if (ESTADO == 2){
            gui.warning_display.innerHTML = "No puede haber dos operadores juntos, corrigelo por favor";
        }

      }
}

