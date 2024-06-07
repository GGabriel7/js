var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

console.log(`Agora são ${hora}:${min}h.`)

if (hora < 5) {
    console.log('BOA MADRUGADA!')
} else if (hora < 12) {
    console.log('BOM DIA')
} else if (hora < 18) {
    console.log('BOA TARDE')
} else {
    console.log('BOA NOITE')
}