const gui = {
    botonExp =  document.getElementById("E"),
    botonPunto = document.getElementById("."),
    boton0 = document.getElementById("0"),
    boton1 = document.getElementById("1"),
    boton2 = document.getElementById("2"),
    boton3 = document.getElementById("3"),
    boton4 = document.getElementById("4"),
    boton5 = document.getElementById("5"),
    boton6 = document.getElementById("6"),
    boton7 = document.getElementById("7"),
    boton8 = document.getElementById("8"),
    boton9 = document.getElementById("9"),
    botonDEL = document.getElementById("DEL"),
    botonAC = document.getElementById("AC"),
    botonX = document.getElementById("X"),
    botonDIV = document.getElementById("%"),
    botonPLUS = document.getElementById("+"),
    botonMINUS = document.getElementById("-"),
    botonANS = document.getElementById("ANS"),
    botonEQUAL = document.getElementById("="),
    display = document.getElementById("display")

};

function register_click (invalue){
    x = display.innerHTML;
    x = x + invalue
    display.innerHTML = x;
    console.log('Gracias por pinchar');
};

gui.boton0.onclick = () => {
    gui.display.innerHTML = "holaa";
    };


let numeric_values = [];

