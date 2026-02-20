nomeAluno = document.getElementById("nomeAluno")
n1 = document.getElementById("n1")
n2 = document.getElementById("n2")
resultadoMedia = document.getElementById("resultadoMedia")
statusFinal = document.getElementById("statusFinal")
CalcBtn = document.getElementById("CalcBtn")

const CalculoMedia = (n1 + n2) / 2
CalcBtn.onclick = function(){
    resultadoMedia.textContent = CalculoMedia
}