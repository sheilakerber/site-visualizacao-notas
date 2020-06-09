// variável turma
var turma1 = document.getElementById("notasTurma1")
var turma2 = document.getElementById("notasTurma2")

// ver turma selecionada
var displaySettingT1 = turma1.style.display;
var displaySettingT2 = turma2.style.display;

function notasTurma1() {
    //resultadoTurma.innerHTML = turma1.value
    turma1.style.display = 'block'
    turma2.style.display = 'none'
}

function notasTurma2() {
    //resultadoTurma.innerHTML = turma2.value
    turma2.style.display = 'block'
    turma1.style.display = 'none'
}