let somar = function(n1=0, n2=0){
    return n1 + n2
}

function fatorial(numero){
    if (numero == 1){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

// console.log(somar(5, 15))

console.log(fatorial(10))
