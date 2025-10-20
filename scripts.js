const elemsExercicio = document.querySelectorAll(".exercicio");
const elemTela = document.querySelector(".tela");
const elemVoltar = document.querySelector(".voltar");

const elemClose = document.querySelector(".close");
const elemPlay = document.querySelector(".play");
const elemPause = document.querySelector(".pause");

const elemCronometro = document.querySelector(".cronometro");

const elemHorario = document.querySelector(".horario");

const elemMinuto = document.querySelector(".minuto");
const elemSegundo = document.querySelector(".segundo");
const elemCentesimo = document.querySelector(".centesimo");

var timer = 0;
var idIntervalo;

// ========= Adicionar classe tela--cronometro =========
elemsExercicio.forEach(function (elemExercicio) {
  elemExercicio.addEventListener("click", function () {
    elemTela.classList.add("tela--cronometro");
  });
});

elemVoltar.addEventListener("click", function () {
  elemTela.classList.remove("tela--cronometro");
  clicouClose();
});

// ========= Adicionar classe iniciou =========
function clicouClose() {
  elemCronometro.classList.remove("iniciou");
  clearInterval(idIntervalo);
  timer = 0;
  atualizarCronometro();
}

elemClose.addEventListener("click", function () {
  clicouClose();
});

function clicouPLay() {
  elemCronometro.classList.add("iniciou");
  rodarTimer();
}

elemPlay.addEventListener("click", function () {
  clicouPLay();
});

function clicouPause() {
  elemCronometro.classList.remove("iniciou");
  clearInterval(idIntervalo);
}

elemPause.addEventListener("click", function () {
  clicouPause();
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
function rodarTimer(params) {
  idIntervalo = setInterval(() => {
  timer = timer + 10;
  atualizarCronometro();
}, 10);
}

function atualizarCronometro() {
  const minutos = Math.floor(timer / 60000).toString().padStart(2, "0");
  const segundos = Math.floor((timer % 60000) / 1000).toString().padStart(2, "0");
  const centesimos = Math.floor((timer % 60000) % 1000 / 10).toString().padStart(2, "0");

  const tempoCronometro = minutos + ":" + segundos + "," + centesimos;

  elemMinuto.innerText = minutos;
  elemSegundo.innerText = segundos;
  elemCentesimo.innerText = centesimos;
}

