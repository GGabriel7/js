function carregar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    var result = document.getElementById('result')

    for (inicio; inicio <= fim; inicio += passo) {
        result.innerHTML = `${inicio}`
    }
}