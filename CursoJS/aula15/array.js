let a = ['MNO-12N3', 'GHI-12H3', 'ABC-12B3']// Tambem pode ser var
a[3] = 'JKL-12K3' // Adiciona um elemento em uma posição em especifico
a.push('DEF-12E3') // Adicona na ultima posição

for (let c=0; c < a.length /*length conta o tanto de elemento*/; c++) {
    console.log(`Carro ${c+1}: ${a[c]}`)
}
console.log('-=-=-=-=-=-=-=-=-')

a.sort() //Organiza em Ordem Alfabetica ou Númerica
for (let c in a) /*Maneira simplicada de mostrar os elemento com looping for*/ {
    console.log(`Carro ${Number(c)+1}: ${a[c]}`)
}
console.log('-=-=-=-=-=-=-=-=-')

let posi = a.indexOf('JKL-12K3') // Procura u objeto e retorna com a posição dele
if (posi == -1) /*Caso não encontra, retorna o valor -1*/ {
    console.log('O valor não foi encontrado')
}
else {
    console.log(`O valor está na posição ${posi}`)
}
