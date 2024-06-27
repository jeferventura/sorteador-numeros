function sortear(){
    let quantidadeDeNumero = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if(deNumero >= ateNumero){
        alert("O Campo - DO NUMERO - não pode ser maior que o campo ATE O NUMERO");
        return;
    }else if(quantidadeDeNumero > (ateNumero - deNumero + 1)){
        alert("Quantidade de numeros sorteados não pode ser maior que a quantidade numeros Até ");
        return;
    }

    let numeroSorteados = [];
    let numero;

    for(let cont = 0; cont < quantidadeDeNumero; cont++){

        numero = obterNumeroAleatorio(deNumero, ateNumero);

        while(numeroSorteados.includes(numero)){
            numero = obterNumeroAleatorio(deNumero, ateNumero);
        };

        numeroSorteados.push(numero)
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroSorteados} </label>`;

    //metodo para alterar o status do botão
    alterarStatusBotao();
}

function obterNumeroAleatorio(numeroMinimo, numeroMaximo) {
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}


function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum numero gerado</label>`;
    //metodo para alterar o status do botão
    alterarStatusBotao();
}