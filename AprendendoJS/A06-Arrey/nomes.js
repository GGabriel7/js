let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ]

myArray.pop()
myArray.push('Gabriel', 'Drica')

tot = 0
arrrayFormatada = []

for (const array of myArray) {
    arrrayFormatada.push(`${array} (${tot})`)
    tot++
}

const myString = arrrayFormatada.join(' - ')

console.log(myString)