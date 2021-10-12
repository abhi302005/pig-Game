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
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');

// meta info.
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// start conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function() {
    // generating random number
    const dice = Math.floor(Math.random() * 6) + 1;

    // display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // checked for rolled 1
    if (dice !== 1) {
        currentScore += dice;
        console.log(currentScore);
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        console.log(activePlayer);
    } else {
        // switching the player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
});