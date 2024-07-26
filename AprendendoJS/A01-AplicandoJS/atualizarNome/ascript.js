const nome = document.querySelector('.nome')

const atualizarNome = () => {
    var id = prompt('Insira seu nome: ')
    nome.textContent = "Jogador: " + id
}

nome.addEventListener('click', atualizarNome)