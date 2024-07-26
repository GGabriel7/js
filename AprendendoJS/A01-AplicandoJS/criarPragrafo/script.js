
const conteiner = document.querySelector('.conteiner')

function criarParagrafo() {
    let paragrafo = document.createElement('p')
    paragrafo.classList.add('form')
    paragrafo.textContent = "Você clicou no botão!"
    conteiner.appendChild(paragrafo)
}

const botao = document.querySelectorAll('button')

for (var i=0; i < botao.length; i++) {
    botao[i].addEventListener('click', criarParagrafo)
}
