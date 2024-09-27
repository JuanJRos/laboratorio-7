import "./style.css";

//Creo una interface para definir los datos de las cartas
interface Carta {
    url: string;
    valor: number;
}
//Creo una constante para cada carta con su url y el valor
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

function sumaPuntuacion(valorCarta : number) : void{
    puntuacion = puntuacion +valorCarta;

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
    /*| "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"*/

const boton = document.getElementById("boton-siguiente");


function mostrarPrueba(): void {
    const texto = document.getElementById("prueba");
    let mensaje ="entra";
    if(texto != null && texto != undefined && texto instanceof HTMLElement){
        console.log("entra2");
        const url = obtenDiseño(dameNumeroCarta());
        mensaje = `${url} con puntuacion ${puntuacion}`;
        
        texto.innerHTML = mensaje;
    }
}

if(boton != null && boton != undefined && boton instanceof HTMLButtonElement){
    boton.addEventListener("click", () => mostrarPrueba());
    
}


console.log(obtenDiseño(dameNumeroCarta()) +", "+puntuacion);