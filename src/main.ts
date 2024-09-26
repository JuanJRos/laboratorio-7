import "./style.css";

//Función para generar el número de la carta
function generarCarta() : number{
    const numeroCarta = Math.floor(Math.random()*10)+1;
    if(numeroCarta>7){
        return numeroCarta+2;
    }else{
        return numeroCarta;
    }
}



console.log(generarCarta());