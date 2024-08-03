function linha(txt) {
    console.log(`\n-=-=-= ${txt} =-=-=-`)
}

linha('Criando Arrey')

const arrey = ['SP', 'CE', 'RJ', 'BA', 'MG']
console.log(arrey)
console.log(`Itens: ${arrey}`)
console.log(`Quantidade de intens: ${arrey.length}`)

linha('Localizando e Adicionando Item')
console.log(`Terceiro item: ${arrey[2]}`)
arrey[2] = 'PE' //Modificando terceiro item
console.log(`Terceiro item modificado: ${arrey[2]}`)
console.log(`Itens atualizados: ${arrey}`)

linha('Pesquisando ITEM')

let pesquisa = 'CE'

if (arrey.indexOf(pesquisa) > -1) {
    console.log(`Achou! está na posição ${arrey.indexOf(pesquisa)}`)
} else {
    console.log('Não encontrado, retorna -1')
}

linha('Adicionando ITENS')

arrey.push('RJ')//Adicionando ITEM
console.log(arrey)
arrey.push('RS', 'SE')//Adicionando mais ITENS
console.log(arrey)

arrey.unshift('GO')//Adicionando ITEM no inicio da arrey
console.log(arrey)

linha('Removendo ITENS')

arrey.pop()//Remove o Ultimo ITEM
console.log(arrey)
//Voce tambem pode aguardar o pop() em uma variavel
let removido = arrey.pop()
console.log(`ITEM removido: ${removido}`)

arrey.shift()//Remove o Primeiro ITEM
console.log(arrey)

arrey.splice(3, 1) //Remove um ITEM especifico, nesse caso BA. (posição desejada, quantos itens remover a partir a posição)
console.log(arrey)

linha('Mostrando arrey com FOR')

for (const arreys of arrey) {
    console.log(arreys)
}

linha('Acessando cada item')

const numbers = [1, 2, 5, 4, 3]
console.log(`Arrey de números: ${numbers}`)

function double(num) {
    return num * 2
}
let numbersDoubled = numbers.map(double)//map() serve para rodar uma mesma operação em todas os ITENS
console.log(`Dobrando os valores: ${numbersDoubled}`)

function islong(num) {
    return num > 2
}
longer = numbers.filter(islong)//filter() deixa apenas o que se encaixam em uma condição.
console.log(`Maior que 2: ${longer}`)

linha('Concersão entre ARREY e STRING')

const string = 'DF,AM,AP,AC,RN'
console.log(`Uma string normal: ${string}`)

const convertToArrey = string.split(",")
console.log(`String convertida para arrey: ${convertToArrey}. Pode até acessar um ITEM especifico: ${convertToArrey[1]}`)

const convertToString = arrey.join(' -> ')
console.log(`Uma arrey convertida em string: ${convertToString}`)
