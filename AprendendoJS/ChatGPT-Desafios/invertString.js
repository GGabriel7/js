function reverseString(string) {
    let invertString = ''

    let array = string.split('')

    invertArray = []

    for (let i=array.length-1; i >= 0; i--) {
        invertArray.push(array[i])
    }

    invertString = invertArray.join('')
    return invertString
}

console.log(reverseString('Adrielly'))