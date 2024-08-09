function linha(txt = 'none') {
    console.log(`\n-=-=-=- ${txt} -=-=-=-`)
} // Função "Básica"

linha('Função "básica"')

linha('Função anonima')

console.log(`
    button.addEventListener('click', function () {
        console.log('Clicou')
        ${/*Uma função anonima não recebe nome*/''}
    })
`)

linha('Arrow Function')

console.log(`
    button.addEventListener('click', (event) => {
        console.log('Clicou \${event.key}')
        ${/*Uma função passada por uma seta*/''}
    })

        OU

    const linha = () => {
    console.log('-=-=-=--=-=-=-')
    }
`)

linha('Em caso de apenas um paremetro pode se fazer assim')

const linha2 = txt => {
    console.log(`\n--- ${txt} ---`)
} // sem o uso de ()

linha2('ola')

linha('E em caso sua funçao só irá um retunr simples')
const numbers = [2, 3, 5]
const doubled = numbers.map(num => num * 2)