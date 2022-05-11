/*
Regras

Papel  ganha da pedra
Pedra ganha da tesoura
Tesoura ganha do Papel

Papel perde para tesoura
Pedra perde da papel
Tesoura perde pedra
**/

// CPU Selections 
var spinner = document.getElementById('load-cpu');
var cpu_rock = document.getElementById('rocket-cpu');
var cpu_paper = document.getElementById('paper-cpu');
var cpu_scissors = document.getElementById('scissors-cpu');

// Players Selections 
var rock_p = document.getElementById('rocket-p');
var paper_p = document.getElementById('paper-p');
var scissors_p = document.getElementById('scissors-p');


// Actions

var playerPoint = 0
var cpuPoint = 0

var scorePlayer = document.getElementById('score-player');
var scoreCpu = document.getElementById('score-cpu');
var reset = document.getElementById('reset')
var alert = document.getElementById('alert');

function random() {
     const random = Math.random() * 2;
     return Math.round(random)
}
function remove(item, cssClass) {
     item.classList.remove(cssClass);
}
function add(item, cssClass) {
     item.classList.add(cssClass);
}
function alertMessage(msg, backgroundAdd) {
     alert.innerHTML = msg;
     add(alert, backgroundAdd);
}

function cleanClass() {
     alert.innerHTML = "";
     alert.className = 'alert'
}
function playRock() {
     var choiceRock = parseInt(rock_p.value = 1);
     if (choiceRock && random() == 2) {
          cleanClass();
               alertMessage("Você ganhou :D", 'bg-success');
          playerPoint += 1;
          scorePlayer.value = playerPoint;
          remove(cpu_scissors, 'd-none')
          add(cpu_rock, 'd-none')
          add(cpu_paper, 'd-none')
     } else if (choiceRock === 1 && random() === 0) {
          cleanClass();
               alertMessage("Empate ¬¬' ", 'bg-warning');
          add(cpu_scissors, 'd-none')
          add(cpu_paper, 'd-none')
          remove(cpu_rock, 'd-none')
     } else if (choiceRock === 1 && random() === 1) {
          cleanClass();
               alertMessage("Você perdeu :(", 'bg-danger');
          cpuPoint += 1;
          scoreCpu.value = cpuPoint;
          add(cpu_scissors, 'd-none')
          add(cpu_rock, 'd-none')
          remove(cpu_paper, 'd-none')
     }
}


function playPapper() {
     var choicePapper = parseInt(paper_p.value = 2);
     if (choicePapper && random() == 2) {
          cleanClass(),
          alertMessage("Você perdeu :(", 'bg-danger');
          cpuPoint += 1;
          scoreCpu.value = cpuPoint;
          remove(cpu_scissors, 'd-none')
          add(cpu_rock, 'd-none')
          add(cpu_paper, 'd-none')
     } else if (choicePapper && random() == 0) {
          cleanClass(),
          alertMessage("Você ganhou :D", 'bg-success');
          playerPoint += 1;
          scorePlayer.value = playerPoint;
          add(cpu_scissors, 'd-none')
          add(cpu_paper, 'd-none')
          remove(cpu_rock, 'd-none')
     } else if (choicePapper && random() === 1) {
          cleanClass(),
          alertMessage("Empate ¬¬' ", 'bg-warning');
          cpuPoint += 1;
          scoreCpu.value = cpuPoint;
          add(cpu_scissors, 'd-none')
          add(cpu_rock, 'd-none')
          remove(cpu_paper, 'd-none')
     }
}

function playScissors() {
     var choiceScissors = parseInt(scissors_p.value = 3);
     if (choiceScissors && random() == 2) {
          cleanClass(),
          alertMessage("Empate ¬¬' ", 'bg-warning');
          remove(cpu_scissors, 'd-none')
          add(cpu_rock, 'd-none')
          add(cpu_paper, 'd-none')
     } else if (choiceScissors && random() == 0) {
          cleanClass(),
          alertMessage("Você perdeu :(", 'bg-danger');
          cpuPoint += 1;
          scoreCpu.value = cpuPoint;
          add(cpu_scissors, 'd-none')
          add(cpu_paper, 'd-none')
          remove(cpu_rock, 'd-none')
     } else if (choiceScissors && random() === 1) {
          cleanClass(),
          alertMessage("Você ganhou :D", 'bg-success');
          playerPoint += 1;
          scorePlayer.value = playerPoint;
          add(cpu_scissors, 'd-none')
          add(cpu_rock, 'd-none')
          remove(cpu_paper, 'd-none')
     }
}

function restart() {
     cleanClass();
     add(cpu_rock, 'd-none')
     add(cpu_paper, 'd-none')
     add(cpu_scissors, 'd-none')
     scorePlayer.value = 0;
     playerPoint = 0;
     cpuPoint = 0;
     scoreCpu.value = 0;
}

rock_p.onclick = playRock;
paper_p.onclick = playPapper;
scissors_p.onclick = playScissors;
// reset.onclick = restart;
reset.onclick = restart;



