/**
 * Exercicio 1 - Refatorar nomes de variaveis e incrementar retorno de numeros impares
 */
function removeEven(arr) {
  let odds = [];
  for (let number of arr) {
    if (number % 2 === 0) {
        odds.push(number);
    }
  }

  return odds;
}

function removeOdd(calc) {
  let odds = [];
  for (let sum of calc) {
    if (sum % 2 !== 0) {
      odds.push(sum);
    }
  }

  return odds;
}

console.log(removeEven([3, 2, 41, 3, 34]));
console.log(removeOdd([3, 13, 22, 27, 32]));
