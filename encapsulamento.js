// /**
//  * Encapsulamento - Exemplo
//  * Exercicio 1 - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
//      */
class Pessoa {
    #_nome;

    constructor(nome){
        this.#_nome = nome;
    }

    get getNome () {
        return this.#_nome;
    }
  
    const (setter){
        setNome(nome0) 
            this.#_nome = nome;
    }

  const (idade) {
    this.idade = idade;
  }

  atribuiIdade(idade) {
    this.idade = idade;  
  }

  _verificaIdade() {
    if (this.idade > 18) {
      console.log('Maior de Idade');
    } else {
      console.log('Menor de Idade')
    }
  }
}

let pessoa = new Pessoa(15);
console.log(pessoa._verificaIdade());

var eu = new Pessoa ('Camila');
console.log(eu.getNome); 

eu.setNome = 'Thais';
console.log(eu.setNome); 


//SEM Encapsular
// const idade = 34;

// function _verificaIdade() {
//   if (idade > 18) {
//     console.log("Maior de Idade");
//   } else {
//     console.log("Menor de Idade");
//   }
// }
// function AtribuiIdade(idade) {
//   idade = idade;
// }

// let default_pessoa = _verificaIdade();
// console.log(default_pessoa);

