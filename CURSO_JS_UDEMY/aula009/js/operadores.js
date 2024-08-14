/*
Aritméticos
 + adição / concatenação 
 - subtração
 / divisão
 * multiplicação
*/
//uma concatenção é junção entre duas strings ex:num3
/*
precedência das operações
()  parenteses sobe para o topo                     |
**  potenciação                                     |
* % /  multiplicação, resto da divisão e divisão    |
+ -   soma e subtração                              |
                                                    V
*/                                                  
const num1 = 10;
const num2 = 20;
const num3 = '50';
const num4 = 2;
const num5 = 2;
let num6 = 2;
console.log(num1 + num3); //concatenação
console.log(num1 + num2); //adição
console.log(num1 - num2); //subtração
console.log(num1 * num2); //multiplicação
console.log(num1 / num2); // divisão
console.log(num4 ** num5); //potenciação
console.log(num1 % num5); //resto da divisão
console.log(num1 + num2 * num4); // multiplicação -> soma 
console.log((num1 + num2) * num4); // precedencia da operação foi alterada para soma-> multiplicação
console.log(++num6); //adicionei +1 com operador de incremento e só funciona em let
console.log(--num6); //subtraí -1 com o operador de decremento e que tambem só funciona com let
//OPERADORES DE ATRIBUIÇÃO
const passo = 2;
let contador = 0;
console.log(contador); // 0
contador += passo; // atribuição de passo +2
console.log(contador); // 2
contador += passo; // atribuiçao de passo + 2 = 4 
console.log(contador); //4  
contador += passo; // atribuição de passo + 2 = 6
console.log(contador); //6

contador *= passo; // multiplicaçao pelo passo *2
console.log(contador); // 12
contador *= passo; // multiplicaçao pelo passo *2 = 24 
console.log(contador); // 24
contador *= passo; // multiplicaçao pelo passo *2 = 48
console.log(contador); // 48

const num7 = parseInt('10'); // transformou uma string em number inteiro
console.log(typeof num7)
const num8 = parseFloat('10.5'); //transformou umas string em number com casas decimais
console.log(num8)
console.log(typeof num8)
// Ou somente transformar com Number 'A MAIS FÁCIL DE TODAS' 
const num9 = Number('21.5');
console.log(num9)
console.log(typeof num9)