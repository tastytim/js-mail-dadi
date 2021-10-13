let pc = Math.floor(Math.random() * 6 + 1);
let player = Math.floor(Math.random() * 6 + 1);
let punteggio = "\n" + "Robot " + pc + "-" + "Player " + player;

if (pc > player) {
  alert("Ha vinto il Robot" + punteggio);
} else if (pc < player) {
  alert("Hai vinto tu" + punteggio);
} else {
  alert("Pareggio" + punteggio);
}
