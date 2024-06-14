function carregar() {
    var numtxt = document.getElementById('num')
    var tab = document.getElementById('tabuada')

    if (numtxt.value.length == 0) {
        window.alert('Digite um Número')
    }
    else {
        num = Number(numtxt.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}