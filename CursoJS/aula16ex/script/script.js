let dados = []
let numtxt = document.getElementById('num')
let result = document.getElementById('result')
let numeros = document.getElementById('numeros')

function adicionar() {
    let num = Number(numtxt.value)
    if(isNumero(num) && !inLista(num, dados)) {
        dados.push(num)
        let item = document.createElement('option')
        item.text = `Número ${num} adicionado!`
        numeros.appendChild(item)
        result.innerHTML = ''
    }
    else {
        window.alert('Valor invalido ou já adicionado')
    }
    numtxt.value = ''
    numtxt.focus()
}

function isNumero(n) {
    if (n < 1 || n > 100) {
        return false
    } else {
        return true
    }
}

function inLista(n, l) {
    if (l.indexOf(n) == -1) {
        return false
    }
    else {
        return true
    }
}

/* Uso do Adicionar sem precisar de outras funções: 
function adicionar() {
    if (numtxt.value.length == 0) {
        window.alert('Digite um número!')
    }
    else {
        let num = Number(numtxt.value)
        let posi = dados.indexOf(num)

        if (posi == -1) {
            if (num < 1 || num > 100) {
                window.alert('Número fora da escala.')
            }
            else {
                dados.push(num)
                let item = document.createElement('option')
                item.text = `Número ${num} adicionado!`
                numeros.appendChild(item)
                result.innerHTML = ''
            }
        }
        else {
            window.alert('Número já adicionado')
        }
    }
    num.value = ''
    num.focus()
}
*/

function verificar() {
    if (dados.length == 0) {
        window.alert('Adicione algum valor')
    } 
    else {
        result.innerHTML = ''

        let maior = dados[0]
        let menor = dados[0]
        let soma = 0
        let media = 0
        for (let pos in dados) {
            soma += dados[pos]
            if (dados[pos] > maior) {
                maior = dados[pos]
            }
            if (dados[pos] < menor) {
                menor = dados[pos]
            } 
        }
        
        media = soma / dados.length

        result.innerHTML += `Ao todo temos ${dados.length} números cadastrados.`
        result.innerHTML += `<br>O menor é o valor ${menor}.`
        result.innerHTML += `<br>O maior é o valor ${maior}.`
        result.innerHTML += `<br>A soma é igual a ${soma}.`
        result.innerHTML += `<br>A média é igual a ${media}.`
    }
}