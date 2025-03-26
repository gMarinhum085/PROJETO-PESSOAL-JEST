function soma(a, b) {
    return a + b;
  }
  
  function subtrai(a, b) {
    return a - b;
  }
  
  function multiplica(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) throw new Error("Não é possível dividir por zero");
    return a / b;
  }
  
  function ehPar(n) {
    return n % 2 === 0;
  }
  
  function potencia(base, expoente) {
    return base ** expoente;
  }
  
  function raizQuadrada(n) {
    if (n < 0) throw new Error("Não é possível calcular a raiz quadrada de um número negativo");
    return Math.sqrt(n);
  }
  
  function modulo(a, b) {
    return a % b;
  }
  
  function absoluto(n) {
    return Math.abs(n);
  }
  
  function inverterSinal(n) {
    return -n;
  }
  
  module.exports = {
    soma,
    subtrai,
    multiplica,
    divide,
    ehPar,
    potencia,
    raizQuadrada,
    modulo,
    absoluto,
    inverterSinal,
  };