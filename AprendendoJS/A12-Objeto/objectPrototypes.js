const {linha} = require('../BibliotecaDeFuncoes/funcoes')

linha('Definindo um Prototype')

linha('Com Object.create')

const personPrototype = {
    greet() {
        console.log('hello!')
    }
}

const carl = Object.create(personPrototype)
carl.greet()

linha('Com um constructor')

const personPrototype2 = {
    greet() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

function Person(name) {
    this.name = name
}

Object.assign(Person.prototype, personPrototype2)

const gabriel = new Person('Gabriel')
gabriel.greet()