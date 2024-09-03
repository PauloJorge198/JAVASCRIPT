//um obj para criar um cadastro de pessoa
/*const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'Jorge',
    idade: 23
}

console.log(pessoa1);*/ 
//agora uma function para criar um obj para cadastro de pessoas

/*function criaPessoa(nome, sobrenome, idade){
    return{ nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Paulo', ' Jorge', ' 23' )
const pessoa2 = criaPessoa('Joao', ' Mata', ' 45' )
const pessoa3 = criaPessoa('Maria', ' Lineu', ' 25' )
const pessoa4 = criaPessoa('Jacó', ' Jubilut', ' 41' )

console.log(pessoa1.nome, pessoa2.nome)*/

const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'Jorge',
    idade: 23,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++
    }

};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()