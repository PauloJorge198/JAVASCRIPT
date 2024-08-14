//Paulo jorge Mata tem 26 anos , pesa 89 kg tem 1.8 de altura e seu IMC é de ???

const nome = 'Paulo Jorge'
const sobrenome = 'Mata'
const idade = 26
const altura = 1.80
const peso = 89
let imc = peso / (altura*altura)
let anoNascimento = 2024 - idade

console.log(nome +' '+ sobrenome +' '+'tem'+' '+ idade +' '+ 'anos, pesa'+' '+ peso + 'kg')
console.log('tem' , altura , 'de altura e seu IMC é', imc,)
console.log(nome , 'nasceu em', anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é ${imc}`)
console.log( `${nome} ${sobrenome} nasceu em ${anoNascimento}`)