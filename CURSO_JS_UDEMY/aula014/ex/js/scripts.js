const numero = Number (prompt('Digite um número com casas decimais:'));
const numeroTitulo = document.getElementById('numero-titulo');
const text = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
text.innerHTML +=' '
text.innerHTML += `<p>Seu número -2 é <strong>${numero - 2}</strong></p>`;
text.innerHTML += `<p>Seu número +2 é <strong>${numero + 2}</strong></p>`;
text.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`
text.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`
text.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`
text.innerHTML += `<p>Acima de .5 para cima e abaixo para baixo: <strong>${Math.round(numero)}</strong></p>`
text.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`
text.innerHTML += `<p><strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong> </p>`
text.innerHTML += `<p> É NaN: <strong>${Number.isNaN(numero)}</strong><p>`