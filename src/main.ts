import "./style.css";

//Delcaro la variable para el turno
let turno = 0;


//Muestro por pantalla
function mostrar(): void{
    const turnoActual = document.getElementById("mostrar-numero");
    if (turnoActual !==null && turnoActual !== undefined){
        turnoActual.innerHTML = turno.toString().padStart(2, '0');
    }
}

//Declaro la función para cambiar el turno
function cambiarTurno(nuevoTurno:number): void {
    //Con esto compruebo que no se pueda bajar del turno 00
    if(nuevoTurno>=0)
        turno = nuevoTurno;

    mostrar();
}

//Función para añadir turno manualmente
function añadirTurno(): void{
    const turnoManual = parseInt((document.getElementById("turno-manual") as HTMLInputElement).value);
    
    if(turnoManual !== null && turnoManual !== undefined){
        if (!isNaN(turnoManual)){
            turno = turnoManual;
           mostrar(); 
        }
    }
}

//Obtengo la pulsacion del botón
const anterior = document.getElementById("boton-anterior");
const siguiente = document.getElementById("boton-siguiente");
const reset = document.getElementById("boton-reset");
const añadir = document.getElementById("boton-añadir");

if(anterior!==null && anterior !==undefined){
    anterior.addEventListener("click", () => cambiarTurno(turno-1));
}
if(siguiente !== null && siguiente !==undefined){
    siguiente.addEventListener("click", () => cambiarTurno(turno+1));
}

if(reset!==null && reset !==undefined){
    reset.addEventListener("click", () => cambiarTurno(0));
}

if(añadir!==null && añadir !==undefined){
    añadir.addEventListener("click", () => añadirTurno());
}