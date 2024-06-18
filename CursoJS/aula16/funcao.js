function parimpar(n) {
    if (n%2==0) {
        return 'Par'
    }
    else {
        return 'Impar'
    }
}

let num = 22
let res = parimpar(num)
console.log(res)

/*
Ou
let res = parimpar(2)
console.log(res)

Ou
console.log(parimpar(2))

Ou
let n = 3
console.log(parimpar(n))
*/