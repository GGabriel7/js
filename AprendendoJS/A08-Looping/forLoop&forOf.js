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

console.log('-=-=-=-=-=-=-')

for (const esporte of esportesOlimpicos) {
    console.log(esporte)
} //Metodo for...of melhor utilizado para percorrer toda a lista do array por causa da facildiade

console.log('-=-=-=-=-=-=-')

for (let i=0; i < esportesOlimpicos.length; i++) {
    console.log(esportesOlimpicos[i])
} // Tambem pode ser usado o for convencional, mas é menos intuitivo. Em certo momentos, você irá precisar usa-lo

console.log('-=-=-=-=-=-=-')

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

console.log('-=-=-=-=-=-=-')

for (const esporte of esportesOlimpicos) {
    
    if (esporte === 'Judô') {
        break // Esse break irá parar o looping quando estiver passando pelo Judo
    }
    console.log(esporte)
}