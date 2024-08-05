const conteiner = document.querySelector('.conteiner')
const enterButton = document.querySelector('.enterButton')
const login = document.querySelector('.login')
const maquina = document.querySelector('.maquina')

let machineActive = false

enterButton.addEventListener('click', () => {
    machineActive = true

    if (machineActive) {
        conteiner.style.backgroundColor = '#b5ffae'
        login.style.display = 'block'
        maquina.style.display = 'none'
    } else {
        conteiner.style.backgroundColor = '#ffaeae'
        login.style.display = 'none'
        enterButton.innerHTML = 'Ligar'
    }

})

const senha = document.querySelector('.senha')
const loginButton = document.querySelector('.loginButton')
const logado = document.querySelector('.logado')
logado.style.display = 'none'

let pwd = 'cheese'

loginButton.addEventListener('click', () => {
    if (senha.value === pwd) {
        logado.textContent = 'Senha correta! Você está logado.'
        login.style.display = 'none'
        logado.style.display = 'block'
    } else {
        logado.textContent = 'Senha Incorreta! Tente novamente'
        logado.style.display = 'block'
    }
})