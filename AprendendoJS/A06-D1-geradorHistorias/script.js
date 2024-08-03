const name = document.querySelector('.name')
const button = document.querySelector('.button')
const text = document.querySelector('.text')

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const xindex =  ['Willy the Goblin', 'Big Daddy', 'Father Christmas']

const yindex =  ['the soup kitchen', 'Disneyland', 'the White House']

const zindex =  ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

let textTotal =  `It was 94 fahrenheit outside, so ${randomValueFromArray(xindex)} went for a walk. When they got to ${randomValueFromArray(yindex)}, they stared in horror for a few moments, then ${randomValueFromArray(zindex)}. Bob saw the whole thing, but was not surprised — ${randomValueFromArray(xindex)} weighs 300 pounds, and it was a hot day.`

button.addEventListener('click', result);

function result() {

    if(document.getElementById("pt").checked) {

        const xindex =  ['Willy, o Goblin', 'Big Pai', 'Papai Noel']

        const yindex =  ['cozinha comunitária', 'Disneylandia', 'Casa branca']

        const zindex =  ['combustão espontânea', 'derreteu em uma poça na calçada', 'virou uma lesma e rastejou para longe']

        textTotal = `Fazia 34.5°C lá fora, então ${randomValueFromArray(xindex)} foi dar uma caminhada. Quando chegou na ${randomValueFromArray(yindex)}, ele ficou horrorizados por alguns momentos, depois ${randomValueFromArray(zindex)}. Bob viu tudo, mas não ficou surpreso — ${randomValueFromArray(xindex)} pesava 136Kg e era um dia quente.`
    }

    if(name.value !== '') {
        const array = textTotal.split(' ')
        array[array.indexOf('Bob')] = name.value
        const string = array.join(' ')
        text.textContent = string
    } else {
        text.textContent = textTotal
    }

    button.disabled = true
    name.disabled = true
    document.querySelector('#en').disabled = true
    document.querySelector('#pt').disabled = true

    text.style.display = 'block'
}