function Cat(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
    this.greeting = function() {
        console.log(`Hello, said ${this.name} the ${this.breed}.`)
    }
}

const bertie = new Cat('Bertie', 'Cymric', 'black')
bertie.greeting()

const dora = new Cat('Dora', 'Khao Manee', 'White')
dora.greeting()