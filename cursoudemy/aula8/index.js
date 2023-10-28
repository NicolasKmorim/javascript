const nome = 'Nicolas';
const sobrenome = 'Amorim';
const idade = 20;
const peso = 122.0
const altura = 1.76;
let imc;
let anonascimento;
imc = peso  / (altura * altura)
anonascimento = 2023 - idade;
console.log(imc)
console.log(anonascimento)
console.log(nome, sobrenome, 'Tem', idade, `anos`, peso, `kg`, altura, `seu imc é de`, imc, `nasceu em `, anonascimento)