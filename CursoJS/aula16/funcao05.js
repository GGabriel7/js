function fatorial(n) {
    if (n==1) {
        return 1
    }
    else {
        console.log(n)
        return n * fatorial(n-1)
    }
}

console.log(fatorial(4))