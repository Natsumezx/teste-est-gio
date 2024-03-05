function verificarFibo(number){
    let a = 0;
    let b= 1;

    while (b < number){
        let vartemp = b;
        b = a + b;
        a = vartemp;
    }

    return b === number || number === 0;
}

verificarNumber = 41; //testei com 34(pertence) e com 41(nao pertence)

if (verificarFibo(verificarNumber)) {
    console.log(verificarNumber + " pertencente a sequencia de Fibonacci.")
} else {
    console.log(verificarNumber + " não pertencente a sequencia.")
}

