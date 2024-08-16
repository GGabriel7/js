function Person(name) {
    this.name = name
    this.introduceSelf = function() {
        console.log(`Olá! Eu me chamo ${this.name}.`)
    }
}

const gabriel = new Person('Gabriel')
const adrielly = new Person('Adrielly')
const enderson = new Person('Enderson')

gabriel.introduceSelf()
enderson.introduceSelf()
adrielly.introduceSelf()

console.log(gabriel)