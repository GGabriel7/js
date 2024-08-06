const linha = (txt) => {
    console.log(`\n-=-=-=- ${txt} -=-=-=-\n`)
}

linha('map() e filter()')

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

function toUpperCats(string) {
    return string.toUpperCase()
}

function startsL(stringL) {
    return stringL.startsWith('L')
}

const upperCats = cats.map(toUpperCats)//map() faz um loop em todo o array utilizando a funçao desejada
console.log(upperCats)

const catsL = cats.filter(startsL)//filter() faz um loop e filtra os itens da arrey com a funçao desejada
console.log(catsL)

linha('Usando expressão de Funçoes')

const fruit = ["Maça", "Banana", "Abacaxi", "Pera", "Melão", "Mamão"];

const fruitM = fruit.filter((fruit) => fruit.startsWith('M'))
console.log(fruitM)

const toUpperFruit = fruit.map((fruit) => fruit.toUpperCase())
console.log(toUpperFruit)