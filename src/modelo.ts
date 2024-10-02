//Apartado opcional? No se si está bien pero necesitaba buscar una solución para como lo plantee
interface Partida {
    url: string;
    puntuacion: number;
    puntuacionMax: number;
}

export const partida: Partida = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
    puntuacion: 0,
    puntuacionMax: 7.5,
};

//Interface para definir los datos de las cartas
interface Carta {
    url: string;
    valor: number;
}

//Creo una constante para cada carta con su url y el valor
export const cartaDorso: Carta ={
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
    valor: 0
};
export const cartaAs: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
    valor: 1
};
export const cartaDos: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
    valor: 2
};
export const cartaTres: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
    valor: 3
};
export const cartaCuatro: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
    valor: 4
};
export const cartaCinco: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
    valor: 5
};
export const cartaSeis: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
    valor: 6
};
export const cartaSiete: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
    valor: 7
};
export const cartaSota: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
    valor: 0.5
};
export const cartaCaballo: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
    valor: 0.5
};
export const cartaRey: Carta = {
    url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
    valor: 0.5
};


