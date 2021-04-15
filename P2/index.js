const gui = {

    botonExp : document.getElementById("E"),
    botonPunto : document.getElementById("."),
    boton_numeric : document.getElementsByClassName("numeric"),
    botonDEL : document.getElementById("DEL"),
    botonAC : document.getElementById("AC"),
    botonANS : document.getElementById("ANS"),
    botonEQUAL : document.getElementById("="),
    display : document.getElementById("display")

};

gui.botonEQUAL.onclick = () =>{
    gui.display.innerHTML = gui.display.innerHTML.replace(/x/g , "*")
    gui.display.innerHTML = eval(display.innerHTML);
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
    console.log('Gracias por pinchar');
};

console.log(gui.boton_numeric);

for (let boton of gui.boton_numeric) {
    boton.onclick = (ev) => {
        register_click(ev.target.value)
      }
}

