function verificar() {
    var atxt = document.getElementById('ano')
    var ano = Number(atxt.value)
    var data = new Date
    anoatual = data.getFullYear()

    var img = document.getElementById('img')
    var foto = document.getElementById('foto')
    var result = document.getElementById('result')

    if (ano == 0 || ano > anoatual) {
        window.alert('[ERRO] Verifique os dados digitados.')
        result.innerHTML = `Tente novamente!`
        result.style.textAlign = 'center'
    } else /*Correto*/ {
        var idade = anoatual - ano

        var sex = document.getElementsByName('sexo')
        var genero = ''
        if (sex[0].checked) {
            genero = 'Homem'

            if (idade < 3) {
                foto.setAttribute('src', 'img/bebe.jpg')
            } else if (idade < 10){
                foto.setAttribute('src', 'img/homcri.jpg')
            } else if (idade < 22) {
                foto.setAttribute('src', 'img/homjov.jpg')
            } else if (idade < 50) {
                foto.setAttribute('src', 'img/homadu.jpg')
            } else {
                foto.setAttribute('src', 'img/homvel.jpg')
            }

        } else {
            genero = 'Mulher'

            if (idade < 3) {
                foto.setAttribute('src', 'img/bebe.jpg')
            } else if (idade < 10){
                foto.setAttribute('src', 'img/mulcri.jpg')
            } else if (idade < 22) {
                foto.setAttribute('src', 'img/muljov.jpg')
            } else if (idade < 50) {
                foto.setAttribute('src', 'img/muladu.jpg')
            } else {
                foto.setAttribute('src', 'img/mulvel.jpg')
            }
        }
        
        result.innerHTML = `Você é ${genero} e tem ${idade} anos`
        result.style.textAlign = 'center'
        img.style.display = 'block'
    }
}