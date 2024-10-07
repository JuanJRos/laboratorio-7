import {mensajeUsuario, dameNumeroCarta, obtenDiseño, partidaInicial} from "./motor";
import {partida} from "./modelo";
import {vi} from "vitest"


describe("mensajeUsuario", () => {
  it("Debería de devolver Has sido muy conservador!! si la puntuación es menor de 4.5", () => {
    // Arrange
    partida.puntuacion=4;
    // Act
    const resultado = mensajeUsuario();

    // Assert
    expect("Has sido muy conservador!!").toBe(resultado);
  });

  it("Debería de devolver Te ha entrado el canguelo eh!! si la puntuación es mayor de 4.5 y menor de 6", () => {
    // Arrange
    partida.puntuacion=5.5;
    // Act
    const resultado = mensajeUsuario();

    // Assert
    expect("Te ha entrado el canguelo eh!!").toBe(resultado);
  });

  it("Debería de devolver Casi, casi..!!! si la puntuación es mayor de 6 y menor de 7", () => {
    // Arrange
    partida.puntuacion=6.5;
    // Act
    const resultado = mensajeUsuario();

    // Assert
    expect("Casi, casi..!!!").toBe(resultado);
  });

  it("Debería de devolver ¡Lo has clavado!¡Enhorabuena! si la puntuación es 7.5", () => {
    // Arrange
    partida.puntuacion=7.5;
    // Act
    const resultado = mensajeUsuario();

    // Assert
    expect("¡Lo has clavado!¡Enhorabuena!").toBe(resultado);
  });

  it("Debería de devolver Te has pasado, Game Over!! si la puntuación es mayor de 7.5", () => {
    // Arrange
    partida.puntuacion=8.5;
    // Act
    const resultado = mensajeUsuario();

    // Assert
    expect("Te has pasado, Game Over!!").toBe(resultado);
  });
});

describe("dameNumeroCarta", () => {
  it("MathRandom lo forzamos para que devuelva 10", () => {
    // Arrange
    const numeroEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.7);
    // Act
    const resultado = dameNumeroCarta();

    // Assert
    expect(numeroEsperado).toBe(resultado);
  });

  it("MathRandom lo forzamos para que sea 8 y nos debe de devolver 11", () => {
    // Arrange
    const numeroEsperado: number = 11;
    vi.spyOn(global.Math, "random").mockReturnValue(0.8);
    // Act
    const resultado = dameNumeroCarta();

    // Assert
    expect(numeroEsperado).toBe(resultado);
  });
});

describe("obtenDiseño", () => {
  it("Debería de devolver 0.5 ya que estoy pidiendo la carta 10", () => {
    // Arrange
    const numeroEsperado: number = 0.5;
    
    // Act
    //Tengo que usar partidaInicial ya que al tenerlo planteado de esa forma no tengo otra alternativa a no ser que cree una función nueva
    partidaInicial();
    obtenDiseño(10);
    const resultado = partida.puntuacion;

    // Assert
    expect(numeroEsperado).toBe(resultado);
  });
  
  it("Debería de devolver 5 ya que estoy pidiendo la carta 5", () => {
    // Arrange
    const numeroEsperado: number = 5;
    
    // Act
    partidaInicial();
    obtenDiseño(5);
    const resultado = partida.puntuacion;

    // Assert
    expect(numeroEsperado).toBe(resultado);
  });
});