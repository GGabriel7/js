const { linha } = require('../BibliotecaDeFuncoes/funcoes.js')

const person = {
    name: ['Gabriel', 'Ramos'],
    age: 21,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} tem ${this.age} anos de idade`) //this. se refere ao objeto no qual o metodo foi chamado
    },
    introduceSelf() {
        console.log(`Hi! Eu sou ${this.name[0]}`)
    }
}

console.log(person)
console.log(person.name)
console.log(person.name[1])
console.log(person.age)
person.bio()
person.introduceSelf()

linha('Obejtos com propriedades de Objetos')

const person2 = {
    name: {
        first: 'Adrielly',
        last: 'Gomes'
    },
    age: 21,
}

console.log(person2)
console.log(person2.name.first)
console.log(person2.name.last)
//Você pode usar assim ou com propriedade de array x[0], como no primeiro exemplo.

linha('Acessando obejetos com Notação de colchetes')
//Em vez de usar notação por ponto, é possivel utilizar por colchetes.

console.log(person2['name']['first'])
console.log(person2['name']['last'])

//Geralmente a notação de ponto é a preferida, mas pode se usar ambas. Mas no caso abaixo é necessário a de colvhetes. Por exemplo, se um nome de propriedade de objeto for mantido em uma variável, você não poderá usar a notação de ponto 

function logPropriedade(nomePropriedade) {
    console.log(person2[nomePropriedade])// Não funcionará com person2.nomePropriedade
}
logPropriedade('age')

const propriedade = 'age'
console.log(person2[propriedade])//Tambem não funcionará com person2.propriedade

linha('Definindo membros do objeto')

person2.name.last = 'Oliveira'//Alterando propriedade
person2['age'] = 19
person2.eyes = 'brown'//adicionando membro
person2['Kg'] = 45
person2.bio = function() {
    console.log('By everybody')
}

const dataName = 'heigth'
const dataValue = '1.75m'

person2[dataName] = dataValue //adicionando por variaves

console.log(person2)