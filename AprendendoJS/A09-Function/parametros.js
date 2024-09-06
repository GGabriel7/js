const linha = (txt) => {
    console.log(`\n-=-=-=- ${txt} -=-=-=-`)
}

linha('Função')

const random = (num=0) /* Função com valor já padrão. Pode ser colocado outro e, caso não seja, será como colocado na função */ => {
    let aleatorio = Math.floor((Math.random() * 10))
    if (num === aleatorio) {
        return `Boa! O número aleatorio é ${aleatorio}`
    } else {
        return `Errou! O número aleatorio é ${aleatorio}`
    }
}

console.log(random(4)) //Essa função gera um número aleatorio entre 0 e 10 e compara com o parametro. Usei console.log para chamar a chamada e mostrar no prompt.

linha('Paramentros')

const num = Math.floor(Math.random() * 100) //Não precisa de parementro na funcao random()
console.log(`Numero aleatorio: ${num}`)

const myText = 'I am a string'
console.log(myText)
const newString = myText.replace('string', 'new string') //Enquanto a função replace() precisa de dois parametros, e são separados por virgulas.
console.log(newString)

const myArray = myText.split(' ')//Funão com parametro unico
console.log(myArray)

let myString = myArray.join(' ')//Parametro opcional. Não precisa ser usado
console.log(myString)
myString = myArray.join()// Sem utilizar parametro
console.log(myString)