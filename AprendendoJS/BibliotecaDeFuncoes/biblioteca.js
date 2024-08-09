array = [1, 2, 3, 4, 5]

function somaArray(array) {
    let soma = 0
    for (const arr of array) {
        soma += arr
    }
    return soma
}

function quadrado(num) {
    return num * num
}

function cubo(num) {
    return num * num * num
}

function fatorial(num) {
    if (num < 0) {
        return undefined
    }
    if (num === 0) {
        return 1
    }

    let x = num-1

    while (x > 1) {
        num *= x
        x--
    } 
    
    return num
}

function circuferencia(raio) {
    return 2 * 3.14 * raio 
}

function media(array) {
    let soma = 0
    for (const ar of array) {
        soma += ar
    }
    return soma/array.length
}

function maior(array) {
    return Math.max(...array)
}

function menor(array) {
    return Math.min(...array)
}