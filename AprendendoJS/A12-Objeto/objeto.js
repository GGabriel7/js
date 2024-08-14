const person = {
    name: ['Gabriel', 'Ramos'],
    age: 21,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} tem ${this.age} anos de idade`)
    },
    introduceSelf: function () {
        console.log(`Hi! Eu sou ${this.name[0]}`)
    }
}

console.log(person)
console.log(person.name)
console.log(person.name[1])
console.log(person.age)
person.bio()
person.introduceSelf()