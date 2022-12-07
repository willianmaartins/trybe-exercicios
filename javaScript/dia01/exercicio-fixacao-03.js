const notaAluno = 81;

if (notaAluno >= 80) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!")
} else if (notaAluno < 80 && notaAluno >= 60) {
    console.log("Você está na nossa lista de espera")
} else {
    console.log('Infelizmente, você reprovou')
}