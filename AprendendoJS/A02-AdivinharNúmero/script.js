var numeroAleatorio = Math.floor(Math.random() * 100) + 1

var palpites = document.querySelector('.guesses')
var ultimoResult = document.querySelector('.lastResult')
var baixoOUalto = document.querySelector('.lowOrHi')


var campoPalpite = document.querySelector('.guessField')
var envioPalpite = document.querySelector('.guessSubmit')

var palpitesConta = 1
var botaoReinicio

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)

    if(palpitesConta === 1) {
        palpites.textContent = "palpites anteriores: "
    }
    palpites.textContent += palpiteUsuario + " "

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResult.textContent = `Parabens! Você acertou com ${palpitesConta} tentativas!`
        ultimoResult.style.backgroundColor = 'green'
        baixoOUalto.textContent = ''
        configFimDejogo()
    } else if (palpitesConta === 10) {
        ultimoResult.textContent = 'Você perdeu! Tente novamente!'
        baixoOUalto.textContent = ''
        configFimDejogo()
    } else {
        ultimoResult.textContent = 'Errou!'
        ultimoResult.style.backgroundColor = 'red'
        if (palpiteUsuario > numeroAleatorio) {
            ultimoResult.textContent = 'Seu número está muito ALTO!'
        } else {
            ultimoResult.textContent = 'Seu número está muito BAIXO!'
        }
    }

    palpitesConta++
    campoPalpite.value = ''
    campoPalpite.focus()
}

envioPalpite.addEventListener('click', conferirPalpite)

var conteiner = document.querySelector('.conteiner')

function configFimDejogo() {
    campoPalpite.disabled = true
    envioPalpite.disabled = true
    botaoReinicio = document.createElement("button")
    botaoReinicio.textContent = 'Iniciar novo jogo!'
    conteiner.appendChild(botaoReinicio)
    botaoReinicio.addEventListener('click', reiniciar)
}

function reiniciar() {
  palpitesConta = 1

  var reiniciarParas = document.querySelectorAll(".resultadoParas p")

  for(var i=0; i < reiniciarParas.length; i++) {
    reiniciarParas[1].textContent = ''
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio)

  campoPalpite.disabled = false
  envioPalpite.disabled = false
  palpites.textContent = ''
  campoPalpite.value = ''
  campoPalpite.focus()

  ultimoResult.style.backgroundColor = 'white'

  numeroAleatorio = Math.floor(Math.random() * 100) + 1
}