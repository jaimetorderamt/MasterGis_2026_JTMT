function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else 
    return n * factorial(n - 1);
}


console.log(factorial(8))

// Demo profesor

const numero = 5

let multiplicacion = 1

for (let contador = 1; contador<=numero; contador++) {
    multiplicacion = multiplicacion * contador
}
console.log(multiplicacion)