const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é: ${nome}<br />`;

const quantidadeDeLetras = nome.replace(' ', '').length;

document.body.innerHTML += `Seu nome tem ${quantidadeDeLetras} letras <br />`;

const segundaLetraDoNome = nome[1];

document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetraDoNome}<br />`;

const primeiroIndiceDeANoNome = nome.toLowerCase().indexOf('a');

document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${primeiroIndiceDeANoNome}<br />`;

const ultimoIndiceDeANoNome = nome.toLowerCase().lastIndexOf('a');

document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${ultimoIndiceDeANoNome}<br />`;

const ultimasTresLetrasDoNome = nome.slice(nome.length -3)

document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTresLetrasDoNome}<br />`;

const palavrasDoNomeSeparadasPorVigula = nome.split(' ').join(', ');

document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNomeSeparadasPorVigula}<br />`;

document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;

document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;