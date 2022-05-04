/**
 * Herança Simples - Exemplos
 * 
 * Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
 * Execicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
 */

class Pessoa {
  constructor(nome, sobrenome, localidade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.localidade = localidade;;
  }

  verificaMaioridade(idade) {
    if (idade < 18) {
      console.log('Esta pessoa é menor de idade');
    } else {
      console.log('Esta pessoa pode beber');
    }
  }
}

class Pfisica extends Pessoa {
  constructor(nome, sobrenome, localidade, cpf, telefone) {
    super(nome, sobrenome, localidade, telefone); //usada para acessar o objeto/classe pai
    this.cpf = cpf;
    this.telefone = telefone;

  }
}

let pessoa = new Pfisica('Maria', 'Ribeiro', 'Avaré', '111.545.454-71', '14 3322-5225');
console.log(pessoa.verificaMaioridade(16));


class PJuridica extends Pessoa {
  constructor(nome, sobrenome, localidade, estado, cnpj) {
    super(nome, sobrenome, localidade);
    this.cnpj = cnpj;
    this.estado = estado;
  }
}

let empresa = new PJuridica('Magalu', 'LTDA', 'Avaré', 'SP', "47456321/0120-22");
console.log(empresa);

class PJuridica2 extends Pessoa {
  constructor(nome, sobrenome) {
    super(nome, sobrenome);
  }

  setCnpj(cnpj) {
    this.cnpj = cnpj;
  }

  getCnpj() {
    return this.cnpj;
  }
}

empresa = new PJuridica2('Magalu', 'LTDA');
empresa.setCnpj('121213212/0001-10');
console.log(empresa.getCnpj());