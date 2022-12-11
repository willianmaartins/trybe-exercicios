// function soma (a, b) {
//     return a + b;
// }

// function subtracao (a, b) {
//     return a - b;
// }

// function multiplicacao (a, b) {
//     return a * b;
// }

// function divisao (a, b) {
//     return a / b;
// }

// function modulo (a, b) {
//     return a % b;
// }

// console.log(soma(5, 15));
// console.log(subtracao(5, 15));
// console.log(multiplicacao(5, 15));
// console.log(divisao(5, 15));
// console.log(modulo(5, 15));

// const valor1 = 25;
// const valor2 = 20;

// function maiorValor () {
//     if (valor1 > valor2) {
//         return 'É maior!';
//     } else {
//         return 'Não é maior!';
//     }
// }

// console.log(maiorValor(valor1, valor2));

// function maiorDeTres(valor1, valor2, valor3) {
//     if (valor1 > valor2 && valor1 > valor3) {
//       return 'O maior número é: ' + valor1;
//     } else if (valor2 > valor1 && valor2 > valor3) {
//       return 'O maior número é: ' + valor2;
//     } else {
//       return 'O maior número é: ' + valor3;
//     }
//   }

//   console.log(maiorDeTres(25, 50, 5));

// function valor (valor) {
//     if (valor > 0) { // Testa se o número é positivo (maior que 0)
//       return 'positive';
//     } else if (valor < 0) { // Testa se o número é negativo (menor que 0)
//       return 'negative';
//     } else { // Se nenhum teste passar, o número é igual a 0
//       return 'zero';
//     }
//   }

//   console.log(valor(0));

function triangleAnglesValidate(angleA, angleB, angleC) {
    let sumOfAngles = angleA + angleB + angleC;
    let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
    if (allAnglesArePositives) {
      if (sumOfAngles === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }

  console.log(triangleAnglesValidate(30, 50, 100));