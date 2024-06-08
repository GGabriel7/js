function verificar() {
    var atxt = document.getElementById('ano')
    var result = document.getElementById('result')
    var data = new Date
    anoatual = data.getFullYear()
    var ano = Number(atxt.value)
    var idade = anoatual - ano

    result.innerHTML = `Sua idade é ${idade}`
    result.style.textAlign = 'center'
}