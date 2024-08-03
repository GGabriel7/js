const products = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99',
    'Cap:15.99'
]

let total = 0

for (const product of products){
    const subArrey = product.split(':')
    const name = subArrey[0]
    const price = Number(subArrey[1])
    total += price
    const item = `${name} - $${price}`
    console.log(item)
}

console.log(`Total: $${total.toFixed(2)}`)