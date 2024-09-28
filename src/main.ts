import "./style.css";

//Creo una interface para definir los datos de las cartas
interface Carta {
    url: string;
    valor: number;
}
//Creo una constante para cada carta con su url y el valor
const cartaDorso ={
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
    valor: 0
};
const cartaAs: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
    valor: 1
};
const cartaDos: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
    valor: 2
};
const cartaTres: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
    valor: 3
};
const cartaCuatro: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
    valor: 4
};
const cartaCinco: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
    valor: 5
};
const cartaSeis: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
    valor: 6
};
const cartaSiete: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
    valor: 7
};
const cartaSota: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
    valor: 0.5
};
const cartaCaballo: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
    valor: 0.5
};
const cartaRey: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
    valor: 0.5
};

//Constante para la puntuacion
let puntuacion : number = 0;

//Función para generar el número de la carta
function dameNumeroCarta() : number{
    const numeroCarta = Math.floor(Math.random()*10)+1;
    if(numeroCarta>7)
        return numeroCarta+2;
    else
        return numeroCarta; 
}

//Función para sumar la puntuación y comprobar si se ha pasado 
function sumaPuntuacion(valorCarta : number) : void{
    puntuacion += valorCarta;
    if(puntuacion<7.5)
        console.log(puntuacion);
    else{
        console.log(mensajeUsuario());
        escribeMensaje(mensajeUsuario());
        gestionDar(true);
        gestionPlantar(true);
    }

}

//Función para conseguir la url dado el número de carta y su valor
function obtenDiseño(numeroCarta : number) : string{
    let urlDiseño: string ="";
    switch(numeroCarta){
        case 1:
            urlDiseño = cartaAs.url;
            sumaPuntuacion(cartaAs.valor);
            break;
        case 2:
            urlDiseño = cartaDos.url;
            sumaPuntuacion(cartaDos.valor);
            break;
        case 3:
            urlDiseño = cartaTres.url;
            sumaPuntuacion(cartaTres.valor);
            break;
        case 4:
            urlDiseño = cartaCuatro.url;
            sumaPuntuacion(cartaCuatro.valor);
            break;     
        case 5:
            urlDiseño = cartaCinco.url;
            sumaPuntuacion(cartaCinco.valor);
            break;
        case 6:
            urlDiseño = cartaSeis.url;
            sumaPuntuacion(cartaSeis.valor);
            break;
        case 7:
            urlDiseño = cartaSiete.url;
            sumaPuntuacion(cartaSiete.valor);
            break; 
        case 10:
            urlDiseño = cartaSota.url;
            sumaPuntuacion(cartaSota.valor);
            break;          
        case 11:
            urlDiseño = cartaCaballo.url;
            sumaPuntuacion(cartaCaballo.valor);
            break;
        case 12:
            urlDiseño = cartaRey.url;
            sumaPuntuacion(cartaRey.valor);
            break;
    }
    return urlDiseño;
}

//Función que devuelve un mensaje con respecto a la puntuación
function mensajeUsuario(): string{
    let texto = "";
    
    if(puntuacion<=4){
        texto = "Has sido muy conservador!!"
    }else{
        if(puntuacion===5){
            texto = "Te ha entrado el canguelo eh!!"
        }else{
            if(puntuacion>=6 && puntuacion<=7){
                texto = "Casi, casi..!!!"
            }else{
                if(puntuacion===7.5){
                    texto = "¡Lo has clavado!¡Enhorabuena!"
                }else{
                    texto = "Te has pasado, Game Over!!"
                }
            }
        }
    }
    return texto;
}

//Función para mostar la carta en el div
function mostrarCarta(urlCarta: string): void {
    const texto = document.getElementById("diseño-carta");
    if(texto != null && texto != undefined && texto instanceof HTMLImageElement){
        texto.src = urlCarta;
    }
}

//Función para iniciar una partida
function juegoNuevo(): void{
    puntuacion = cartaDorso.valor;
    mostrarCarta(cartaDorso.url);
}

//Función para activar o desactivar el boton plantar
function gestionPlantar(situacion: boolean):void{
    const operacion = document.getElementById("boton-plantar");
    if(operacion != null && operacion != undefined && operacion instanceof HTMLButtonElement)
        operacion.disabled = situacion;
}

//Función para activar o desactivar el boton dame
function gestionDar(situacion: boolean):void{
    const operacion = document.getElementById("boton-dame");
    if(operacion != null && operacion != undefined && operacion instanceof HTMLButtonElement)
        operacion.disabled = situacion;
}

function escribeMensaje(mensaje : string){
    const textoPantalla = document.getElementById("prueba");
    if(textoPantalla != null && textoPantalla != undefined && textoPantalla instanceof HTMLElement)
        textoPantalla.innerHTML = mensaje;
}

const botonNuevo = document.getElementById("boton-nuevo")
const botonDame = document.getElementById("boton-dame");
const botonPlantar = document.getElementById("boton-plantar");

if(botonNuevo != null && botonNuevo != undefined && botonNuevo instanceof HTMLButtonElement){
    botonNuevo.addEventListener("click", () => {juegoNuevo(), 
                                                gestionPlantar(false),
                                                gestionDar(false),
                                                escribeMensaje("")});
}

if(botonDame != null && botonDame != undefined && botonDame instanceof HTMLButtonElement){
    botonDame.addEventListener("click", () => mostrarCarta(obtenDiseño(dameNumeroCarta())));
}

if(botonPlantar != null && botonPlantar != undefined && botonPlantar instanceof HTMLButtonElement){
    botonPlantar.addEventListener("click", () => {gestionPlantar(true), 
                                                gestionDar(true),
                                                mensajeUsuario()});
}
