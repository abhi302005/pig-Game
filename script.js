'use strict';

// selecting elements
// player--0
const player0E1 = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');

// player--1
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');

// dice role
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');

// meta info.
let scores, currentScore, activePlayer, playing;

// start conditions
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function() {
    // generating random number
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // display the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;
});