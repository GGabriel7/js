const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

birds.splice(birds.indexOf('Eagles'), 1)

function acharE(array) {
    return array.startsWith('E')
}

console.log(birds.filter(acharE))