function carregar() {
    var txthora = document.getElementById('horas')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    txthora.innerHTML = `Agora são ${hora}h.`

    if (hora > 4 && hora <= 12) {
        img.src = 'imagens/manha.jpeg'
        document.body.style.background = '#8dcaca'
    } else if (hora > 12 && hora < 18) {
        img.src = 'imagens/tarde.jpeg'
        document.body.style.background = '#e0b641'
    } else {
        img.src = 'imagens/noite.jpeg'
        document.body.style.background = '#434552'
    }
}