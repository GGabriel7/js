function linha() {
    console.log('-=-=-=-=-=-=-=-')
}

const name = "gabriel"

console.log(name)
linha()

console.log(`Quantidade de letras: ${name.length}`)//quantidade
console.log(`Priemeira letra: ${name[0]}`)//primeira leta
console.log(`ultima letra: ${name[name.length - 1]}`)//metodo de mostrar a ultima

linha()

const pesquisa = "el"

if (name.includes(pesquisa)) {
    console.log(`Achou ${pesquisa}`)
} else {
    console.log(`Não achou ${pesquisa}`)
}

if (name.startsWith(pesquisa)) {
    console.log(`Começa com ${pesquisa}`)
} else if (name.endsWith(pesquisa)) {
    console.log(`Termina com ${pesquisa}`)
} else {
    console.log(`Não começa nem termina com ${pesquisa}`)
}

linha()

const nomeCompleto = "Joao Gabriel do Nascimento Ramos"
console.log(nomeCompleto)

const letraA = nomeCompleto.indexOf('a')
//.idenxOf procura e mostra a posição de um nome ou caracteres de uma string. Caso não ache, retornará -1
console.log(letraA)

console.log(nomeCompleto.indexOf('a', letraA + 1)) //Com isso, irá mostrar a proxima letra A

linha()

console.log(nomeCompleto.slice(13)) // mostra a substring a partir da posição que sejar
console.log(nomeCompleto.slice(5, 12)) // mostra uma sbstring dentro da sting passando a posição inicial e

linha()

console.log(`Nome completo todo minusculo: ${nomeCompleto.toLowerCase()}`)
console.log(`Nome completo todo maisculo: ${nomeCompleto.toUpperCase()}`)

linha()

let noSpace = nomeCompleto.replace(' ', '')// .replace substitue a substring que aparecer na ocorrencia.
console.log(noSpace)
noSpace = nomeCompleto.replaceAll(' ', '')// .replaceAll vai substituir todas as substring encontradas na ocorrencia.
console.log(noSpace)
