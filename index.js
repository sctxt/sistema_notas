nomeAluno = document.getElementById("nomeAluno")
n1 = document.getElementById("n1")
n2 = document.getElementById("n2")
resultadoMedia = document.getElementById("resultadoMedia")
statusFinal = document.getElementById("statusFinal")
CalcBtn = document.getElementById("CalcBtn")
alunoTabela = document.getElementById("alunoTabela")
CalcBtn.onclick = function(){
    let nota1 = Number(n1.value)
    let nota2 = Number(n2.value)
    let CalculoMedia = (nota1 + nota2) / 2
    resultadoMedia.textContent = CalculoMedia
    statusFinal.textContent = CalculoMedia >= 6 ? "Passou" : "Reprovou"
    if (CalculoMedia >= 6){
        statusFinal.style.backgroundColor = "green"
    }
    else{
        statusFinal.style.backgroundColor = "red"
    }
    alunoTabela.textContent = nomeAluno.value
}