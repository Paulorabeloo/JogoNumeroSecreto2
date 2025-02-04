//let titulo = document.querySelector('h1'); //selecionou a tag h1 no html
//titulo.innerHTML = 'Jogo do número secreto'

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10'
// os 2 jeitos funcionam mas boa prática é o de baixo:

// vai gerar o número aleatorio e guardar na variável
let numeroSecreto = gerarNumeroAleatorio();

//função com parametros
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
 
//função sem retorno e sem parametro
function verificarChute() {
    // vai pegar o valor(value) da tag input no html e armazenar na variável chute
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Parabéns, Você descobriu o número secreto');
    }
    else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    }
    else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
}

//função com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1) //parseInt vai transformar em número inteiro
}