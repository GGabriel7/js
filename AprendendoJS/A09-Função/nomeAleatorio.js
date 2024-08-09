const names = [
    'Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'
]

const randomName = array => {
    let randomID = Math.floor(Math.random() * 8)
    return array[randomID]
}

let name = randomName(names)

console.log(name)