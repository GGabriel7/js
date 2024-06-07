var idade = 64

console.log(`Você tem ${idade} e seu voto é: `)

if (idade < 16) {
    console.log('PROIBÍDO!')
} else if (idade < 18 || idade > 65) {
    console.log('OPCIONAL!')
} else {
    console.log('OBRIGATÓRIO')
}