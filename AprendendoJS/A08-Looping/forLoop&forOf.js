function linha(txt) {
    console.log(`\n-=-=- ${txt} -=-=-`)
}

linha('Array')

const esportesOlimpicos = [
    "Atletismo",
    "Natação",
    "Ginástica Artística",
    "Basquete",
    "Vôlei",
    "Futebol",
    "Judô",
    "Ciclismo",
    "Tênis",
    "Remo"
]

console.log(esportesOlimpicos)

linha('Array percorrida com for...of')

for (const esporte of esportesOlimpicos) {
    console.log(esporte)
} //Metodo for...of melhor utilizado para percorrer toda a lista do array por causa da facildiade

linha('Array percorrida com for')

for (let i=0; i < esportesOlimpicos.length; i++) {
    console.log(esportesOlimpicos[i])
} // Tambem pode ser usado o for convencional, mas é menos intuitivo. Em certo momentos, você irá precisar usa-lo

linha('Utilizando if para mexer em itens da array especificos')

//Como nesse exemplo: 
let esportesFavs = 'Meus esportes favoritos: '
for (let i=0; i < esportesOlimpicos.length; i++) {
    if (i === esportesOlimpicos.length-1) {
        esportesFavs += `e ${esportesOlimpicos[i]}.`
    } else if (i === esportesOlimpicos.length-2) {
        esportesFavs += `${esportesOlimpicos[i]} `
    } else {
        esportesFavs += `${esportesOlimpicos[i]}, `
    }
} // Nessa situação eu quis mudar especificamente alguns itens dentro do array, e precisei usar o esportesOlimpicos[i] especifico.
console.log(esportesFavs)

linha('Dando break no Judo')

for (const esporte of esportesOlimpicos) {
    
    if (esporte === 'Judô') {
        break // Esse break irá parar o looping quando estiver passando pelo Judo
    }
    console.log(esporte)
}

linha('Usando continue caso um item tenha mais de 7 caracteres')

for (const esporte of esportesOlimpicos) {
    if (esporte.length <= 7) {
        continue //O continue serve para dar continuidade ao codigo caso uma condição seja realizada
    }
    console.log(esporte)
}

linha('Percorrendo com while')

let esportesFavs2 = 'Meus esportes favoritos: '
let i = 0
while (i < esportesOlimpicos.length) {
    if (i === esportesOlimpicos.length-1) {
        esportesFavs2 += `e ${esportesOlimpicos[i]}.`
    } else if (i === esportesOlimpicos.length-2) {
        esportesFavs2 += `${esportesOlimpicos[i]} `
    } else {
        esportesFavs2 += `${esportesOlimpicos[i]}, `
    }
    i++
}
console.log(esportesFavs2)

linha('Percorrendo com do...while')

let esportesFavs3 = 'Meus esportes favoritos: '
let i2 = 0
do {
    if (i2 === esportesOlimpicos.length-1) {
        esportesFavs3 += `e ${esportesOlimpicos[i2]}.`
    } else if (i2 === esportesOlimpicos.length-2) {
        esportesFavs3 += `${esportesOlimpicos[i2]} `
    } else {
        esportesFavs3 += `${esportesOlimpicos[i2]}, `
    }
    i2++
} while (i2 < esportesOlimpicos.length)
console.log(esportesFavs3)

linha('Exercicio 1')

let text = 'Contagem regressiva - '
let num = 10
while (num >= 0) {
    if (num === 10) {
        text += `começando: ${num} - `
    } else if (num === 0) {
        text += `${num} - FIM`
    } else {
        text += `${num} - `
    }
    num--
}

console.log(text)