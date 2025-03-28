const { soma, subtrai, multiplica, divide, ehPar,
  potencia, raizQuadrada, restoDaDivisao, absoluto, inverterSinal,
} = require("../src/calculadora");

describe("Testes da Calculadora", () => {
  test("Soma dois números corretamente", () => {
    expect(soma(2, 3)).toBe(5);
    expect(soma(-1, 1)).toBe(0);
  });

  test("Subtrai dois números corretamente", () => {
    expect(subtrai(6, 3)).toBe(3);
    expect(subtrai(10, 5)).toBe(5);
  });

  test("Multiplica dois números corretamente", () => {
    expect(multiplica(4, 3)).toBe(12);
    expect(multiplica(-2, 3)).toBe(-6);
  });

  test("Divide dois números corretamente", () => {
    expect(divide(10, 2)).toBe(5);
    expect(() => divide(5, 0)).toThrow("Não é possível dividir por zero");
  });

  test("Verifica se um número é par", () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(9)).toBe(false);
  });

  test("Calcula a potência de um número", () => {
    expect(potencia(2, 3)).toBe(8);
    expect(potencia(5, 0)).toBe(1);
  });

  test("Calcula a raiz quadrada de um número", () => {
    expect(raizQuadrada(9)).toBe(3);
    expect(() => raizQuadrada(-4)).toThrow("Não é possível calcular a raiz quadrada de um número negativo");
  });

  test("Calcula o resto da divisão entre dois números", () => {
    expect(restoDaDivisao(10, 3)).toBe(1);
    expect(restoDaDivisao(8, 2)).toBe(0);
  });

  test("Calcula o valor absoluto de um número", () => {
    expect(absoluto(-5)).toBe(5);
    expect(absoluto(3)).toBe(3);
  });

  test("Inverte o sinal de um número", () => {
    expect(inverterSinal(5)).toBe(-5);
    expect(inverterSinal(-7)).toBe(7);
  });
});