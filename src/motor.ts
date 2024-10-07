import {cartaAs, cartaCaballo, cartaCinco, cartaCuatro, cartaDorso, cartaDos,
    cartaRey, cartaSeis, cartaSiete, cartaSota, cartaTres, partida
} from "./modelo";

//Función para generar el número de la carta
export function dameNumeroCarta() : number{
    const numeroCarta = Math.floor(Math.random()*10)+1;
    if(numeroCarta>7)
        return numeroCarta+2;
    else
        return numeroCarta; 
}

//Función para sumar la puntuación y comprobar si se ha pasado 
function sumaPuntuacion(valorCarta : number) : void{
    partida.puntuacion += valorCarta;
}

//Función para conseguir la url dado el número de carta y su valor
export function obtenDiseño(numeroCarta : number) : void{
    switch(numeroCarta){
        case 1:
            partida.url = cartaAs.url;
            sumaPuntuacion(cartaAs.valor);
            break;
        case 2:
            partida.url = cartaDos.url;
            sumaPuntuacion(cartaDos.valor);
            break;
        case 3:
            partida.url = cartaTres.url;
            sumaPuntuacion(cartaTres.valor);
            break;
        case 4:
            partida.url = cartaCuatro.url;
            sumaPuntuacion(cartaCuatro.valor);
            break;     
        case 5:
            partida.url = cartaCinco.url;
            sumaPuntuacion(cartaCinco.valor);
            break;
        case 6:
            partida.url = cartaSeis.url;
            sumaPuntuacion(cartaSeis.valor);
            break;
        case 7:
            partida.url = cartaSiete.url;
            sumaPuntuacion(cartaSiete.valor);
            break; 
        case 10:
            partida.url = cartaSota.url;
            sumaPuntuacion(cartaSota.valor);
            break;          
        case 11:
            partida.url = cartaCaballo.url;
            sumaPuntuacion(cartaCaballo.valor);
            break;
        case 12:
            partida.url = cartaRey.url;
            sumaPuntuacion(cartaRey.valor);
            break;
    }
}

//Función que devuelve un mensaje con respecto a la puntuación
export function mensajeUsuario(): string{
    let texto = "";
    if(partida.puntuacion<= 4.5){
        texto = "Has sido muy conservador!!"
    }else{
        if(partida.puntuacion===5 || partida.puntuacion < 6){
            texto = "Te ha entrado el canguelo eh!!"
        }else{
            if(partida.puntuacion>=6 && partida.puntuacion<=7){
                texto = "Casi, casi..!!!"
            }else{
                if(partida.puntuacion===7.5){
                    texto = "¡Lo has clavado!¡Enhorabuena!"
                }else{
                    texto = "Te has pasado, Game Over!!"
                }
            }
        }
    }
    return texto;
}

//Función para iniciar una partida
export function juegoNuevo(): void{
    partida.puntuacion = cartaDorso.valor;
    partida.url= cartaDorso.url;
}

export function partidaInicial(): void{
    partida.puntuacion = 0;
    partida.url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
};
