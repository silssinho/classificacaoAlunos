
let listaAlunos = ["Carlos", "Maria", "Jose", "Claúdio"]

let quantidadeAlunos = 5;

for (let contador = 0; contador < listaAlunos.length; contador++) {
    console.log(contador)

    if (contador == 0) {
        console.log(`O aluno ${listaAlunos[contador]} é número ZERO`)
    }
    else if (contador % 2 == 0) {
        console.log("A aluna " + listaAlunos[contador] + " é numero PAR")
    } else {
        console.log(`O aluno ${listaAlunos[contador]} é número IMPAR`)
    }
}











