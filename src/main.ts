import "./style.css";

//Declaramos las variables de los distintos géneros
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

//Declaramos el estilo en un variable para facilitar el uso
const estiloTexto = "background: green; font-size: 25px; font-weight: bold; ";
interface Grupo {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    genero: string;
}

const grupoA: Grupo = {
    nombre: "The Beattles",
    añoFundacion: 1960,
    activo: false,
    genero: popRock,
};

const grupoB: Grupo = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: rock,
};

const grupoC: Grupo = {
    nombre: "AC DC",
    añoFundacion: 1673,
    activo: true,
    genero: hardRock,
};

const grupoD: Grupo = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: clasica,
};

const grupoE: Grupo = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: rock,
};

console.log(`%c ${grupoA.nombre} `, estiloTexto);
console.log(`Fundado en el año: ${grupoA.añoFundacion} `);
console.log(`El grupo esta en activo: ${grupoA.activo} `);
console.log(`Género musical: ${grupoA.genero} `);
console.log("-----------------------------");
console.log(`%c ${grupoB.nombre} `, estiloTexto);
console.log(`Fundado en el año: ${grupoB.añoFundacion} `);
console.log(`El grupo esta en activo: ${grupoB.activo} `);
console.log(`Género musical: ${grupoB.genero} `);
console.log("-----------------------------");
console.log(`%c ${grupoC.nombre} `, estiloTexto);
console.log(`Fundado en el año: ${grupoC.añoFundacion} `);
console.log(`El grupo esta en activo: ${grupoC.activo} `);
console.log(`Género musical: ${grupoC.genero} `);
console.log("-----------------------------");
console.log(`%c ${grupoD.nombre} `, estiloTexto);
console.log(`Fundado en el año: ${grupoD.añoFundacion} `);
console.log(`El grupo esta en activo: ${grupoD.activo} `);
console.log(`Género musical: ${grupoD.genero} `);
console.log("-----------------------------");
console.log(`%c ${grupoE.nombre} `, estiloTexto);
console.log(`Fundado en el año: ${grupoE.añoFundacion} `);
console.log(`El grupo esta en activo: ${grupoE.activo} `);
console.log(`Género musical: ${grupoE.genero} `);
console.log("-----------------------------");