

function sortear(){
    let quantidadeDeNumero = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    let numeroSorteados = [];
    let numero;

    for(let cont = 0; cont < quantidadeDeNumero; cont++){
        numero = obterNumeroAleatorio(deNumero, ateNumero);
        numeroSorteados.push(numero)
    }

    alert("," + numeroSorteados);
}

function obterNumeroAleatorio(numeroMinimo, numeroMaximo) {
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}

