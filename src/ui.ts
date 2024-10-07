import {partida} from "./modelo";

import{dameNumeroCarta, obtenDiseño, mensajeUsuario} from "./motor";

//Función para mostar la carta en el div
export function mostrarCarta(): void {
    const texto = document.getElementById("diseño-carta");
    if(texto !== null && texto !== undefined && texto instanceof HTMLImageElement){
        texto.src = partida.url;
    }
}

//Función para activar o desactivar el boton plantar
export function gestionPlantar(situacion: boolean):void{
    const operacion = document.getElementById("boton-plantar");
    if(operacion !== null && operacion !== undefined && operacion instanceof HTMLButtonElement)
        operacion.disabled = situacion;
}

//Función para activar o desactivar el boton dame
export function gestionDar(situacion: boolean):void{
    const operacion = document.getElementById("boton-dame");
    if(operacion !== null && operacion !== undefined && operacion instanceof HTMLButtonElement)
        operacion.disabled = situacion;
}

//Función para sacar por pantalla el mensaje que toque
export function escribeMensaje(mensaje : string){
    const textoPantalla = document.getElementById("prueba");
    if(textoPantalla !== null && textoPantalla !== undefined && textoPantalla instanceof HTMLParagraphElement)
        textoPantalla.innerHTML = mensaje;
}

//Función para sacar por pantalla la puntuación
export function escribePuntuacion(mensaje : string){
    const textoPuntuacion = document.getElementById("texto-puntuacion");
    if(textoPuntuacion !== null && textoPuntuacion !== undefined && textoPuntuacion instanceof HTMLParagraphElement)
        textoPuntuacion.innerHTML = mensaje;
}

//Función para activar desactivar boton
export function botonQuePasaria(estado : boolean): void{
    const botonPrueba = document.getElementById("boton-probar");
    if(botonPrueba !== null && botonPrueba !== undefined && botonPrueba instanceof HTMLButtonElement){
        botonPrueba.disabled = estado;
    }
}

export function accionDar():void{
    obtenDiseño(dameNumeroCarta());
    escribePuntuacion(`Puntuación: ${partida.puntuacion}`);
    mostrarCarta();
    if(partida.puntuacion === partida.puntuacionMax){
        escribeMensaje(mensajeUsuario());
        gestionDar(true);
        gestionPlantar(true);
    }else{
        if(partida.puntuacion > partida.puntuacionMax){
            escribeMensaje(mensajeUsuario());
            gestionDar(true);
            gestionPlantar(true);
        }else{
            gestionPlantar(false);
        }
    }
};