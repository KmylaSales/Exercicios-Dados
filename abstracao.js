/**
 * Abstração - Exemplos
 * Exercicio 1 - Exemplos de abstração no dia a dia, se quiser implementar pode.
 */
// class FazerCafe {
//   constructor(quantidade_acucar, quantidade_po) {
//     this.quantidade_acucar = quantidade_acucar;
//     this.quantidade_po = quantidade_po;
//   }

//   ferverAgua() {
//     return "Agua está fervida";
//   }

//   adicionarAcucar() {
//     return 'Colocou ' + this.quantidade_acucar + 'colheres de açucar';
//   }

//   adicionarPo() {
//     return 'Colocou ' + this.quantidade_po + 'colheres de café';
//   }

//   coarCafe() {
//     return 'Coou o café';
//   }

//   servirCafe() {
//     return 'café pronto!';
//   }
// }


// let cafe = new FazerCafe(6, 3).servirCafe();
// console.log(cafe);


class LavarRoupa {
  constructor(quantidade_agua, quantidade_sabao) {
    this.quantidade_agua = quantidade_agua;
    this.quantidade_sabao = quantidade_sabao;
  }

  ligarLavadora() {
    return "A lavadora está ligada";
  }

  colocarAgua() {
    return 'Apertou o botão e colocou ' + this.quantidade_agua + 'litros de água';
  }

  adicionarSabao() {
    return 'Colocou ' + this.quantidade_sabao + 'gramas de sabão';
  }

  apertouBotao() {
    return 'Ligou a lavadora';
  }

  roupaLimpa() {
    return 'Roupa lavada!';
  }
}


let lavar = new LavarRoupa(3, 300).roupaLimpa();
console.log(lavar);