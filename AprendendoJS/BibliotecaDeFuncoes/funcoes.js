function drawCircle(x, y, size) {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fill()
}

const randomColor = () => {
    const number = ['0', '1', '2', '3' , '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    let color = ''

    for (let i=0; i < 6; i++) {
        color += number[Math.floor(Math.random() * 16)]
    }

    return `#${color}`
}