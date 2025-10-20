const elemsExercicio = document.querySelectorAll(".exercicio");
const elemTela = document.querySelector(".tela");
const elemVoltar = document.querySelector(".voltar");

const elemClose = document.querySelector(".close");
const elemPlay = document.querySelector(".play");
const elemPause = document.querySelector(".pause");

const elemCronometro = document.querySelector(".cronometro");

const elemHorario = document.querySelector(".horario");

var timer = 0;

// ========= Adicionar classe tela--cronometro =========
elemsExercicio.forEach(function (elemExercicio) {
  elemExercicio.addEventListener("click", function () {
    elemTela.classList.add("tela--cronometro");
  });
});

elemVoltar.addEventListener("click", function () {
  elemTela.classList.remove("tela--cronometro");
});

// ========= Adicionar classe iniciou =========
elemClose.addEventListener("click", function () {
  elemCronometro.classList.remove("iniciou");
});

elemPlay.addEventListener("click", function () {
  elemCronometro.classList.add("iniciou");
});

elemPause.addEventListener("click", function () {
  elemCronometro.classList.remove("iniciou");
});

// ========= Atualizar horario =========
function atualizarHorario() {
  const horas = new Date().getHours().toString().padStart(2, "0");
  const minutos = new Date().getMinutes().toString().padStart(2, "0");
  const horario = horas + ":" + minutos;

  elemHorario.innerText = horario;
  console.log(horario);
}

atualizarHorario();

setInterval(() => {
  atualizarHorario();
}, 5000);

// ========= Construindo o cronometro =========
setInterval(() => {
  timer = timer + 10;
  console.log(timer);
}, 10);
