function carregar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    var result = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = '[ERRO] Impossivel contar.'
    } 
    else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        result.innerHTML = 'CONTANDO: '

        if (p <= 0) {
            window.alert('PASSO INVALIDO. Considerando passo 1')
            p = 1
        }

        if (f >= i) {
            for (var c = i; c <= f; c += p) {
                result.innerHTML += ` \u{1F449} ${c} `
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                result.innerHTML += ` \u{1F449} ${c} `
            }
        }
    }
}