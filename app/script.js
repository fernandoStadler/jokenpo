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
var start = document.getElementById('start')
var reset = document.getElementById('reset')

function random() {
     const random = Math.random() * 2;
     return Math.round(random)
}

function playRock() {
     var choiceRock = parseInt(rock_p.value = 1);

     if (choiceRock  && random() == 2) {
          playerPoint += 1;
          scorePlayer.value = playerPoint;
          alert(`Você  ganhou, a maquina jogou tesoura e o seu foi pedra | Score: ${playerPoint}`)
     } else if (choiceRock == 0 && random() == 0) {
          alert("empatou")
     }
     else {
          cpuPoint += 1;
          scoreCpu.value = cpuPoint;
         alert(`Você não ganhou, número da maquina foi ${random()} e o seu foi ${choiceRock}`)
     }
}

function playPapper() {
     var choicePapper = parseInt(paper_p.value = 2);
     if (choicePapper && random() === 1) {
          playerPoint += 1;
          scorePlayer.value = playerPoint;
          alert(`Você  ganhou, a maquina jogou pedra e o seu foi papel | Score: ${playerPoint}`)
     } else {
          cpuPoint += 1;
          scoreCpu.value = cpuPoint;
         
          alert(`Você não ganhou, número da maquina foi ${random()} e o seu foi ${choicePapper}`)
     }
}

function playScissors() {
     var choiceScissors = parseInt(scissors_p.value = 3);

     if (choiceScissors && random() === 1) {
          playerPoint += 1;
          scorePlayer.value = playerPoint;
          alert(`Você  ganhou, a maquina jogou papel e o seu foi tesoura | Score: ${playerPoint}`)
     } else {
          cpuPoint += 1;
          scoreCpu.value = cpuPoint;
          alert(`Você não ganhou, número da maquina foi ${random()} e o seu foi ${choiceScissors}`)
     }
}

function restart() {
     scorePlayer.value = 0;
     playerPoint = 0;
     cpuPoint = 0;
     scoreCpu.value = 0;
}


rock_p.onclick = playRock;
paper_p.onclick = playPapper;
scissors_p.onclick = playScissors;
reset.onclick = restart;



