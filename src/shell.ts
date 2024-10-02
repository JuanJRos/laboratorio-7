import{mensajeUsuario, juegoNuevo, partidaInicial} from "./motor";

import{mostrarCarta, gestionPlantar, gestionDar, escribeMensaje, 
    escribePuntuacion, botonQuePasaria, accionDar} from "./ui";

document.addEventListener("DOMContentLoaded", () => {partidaInicial(),
                                                    gestionPlantar(true),
                                                    gestionDar(false),
                                                    botonQuePasaria(true)});

const botonNuevo = document.getElementById("boton-nuevo")
const botonDame = document.getElementById("boton-dame");
const botonPlantar = document.getElementById("boton-plantar");
const botonPrueba = document.getElementById("boton-probar");

if(botonNuevo != null && botonNuevo != undefined && botonNuevo instanceof HTMLButtonElement){
    botonNuevo.addEventListener("click", () => {juegoNuevo(),
                                                mostrarCarta(), 
                                                gestionPlantar(true),
                                                gestionDar(false),
                                                escribeMensaje(""),
                                                escribePuntuacion("Puntuación: 0"),
                                                botonQuePasaria(true)});
}

if(botonDame != null && botonDame != undefined && botonDame instanceof HTMLButtonElement){
    botonDame.addEventListener("click", () => accionDar());
}

if(botonPlantar != null && botonPlantar != undefined && botonPlantar instanceof HTMLButtonElement){
    botonPlantar.addEventListener("click", () => {gestionPlantar(true), 
                                                gestionDar(true),
                                                escribeMensaje(mensajeUsuario()),
                                                botonQuePasaria(false)});
}

if(botonPrueba != null && botonPrueba != undefined && botonPrueba instanceof HTMLButtonElement){
    botonPrueba.addEventListener("click", () => {mostrarCarta(),
                                                accionDar(),
                                                botonQuePasaria(true),
                                                gestionPlantar(true)});
}
