const rangeNum = document.querySelector("#range-num");
const guessNum = document.querySelector("#guess-num");
const playBtn = document.querySelector("#play-btn");
const result = document.querySelector('.result')
const machine = document.querySelector('.machine')
const score = document.querySelector(".score");
const form = document.querySelector(".numForm");

function playGame(event) {
	event.preventDefault();
	const rNUM = rangeNum.value;
	const gNUM = guessNum.value;
	const random = Math.floor(Math.random() * rNUM);
	result.innerText = `You chose: ${gNUM}, the machine chose: ${random}`;
	if (gNUM == random) {
		score.innerText = 'You Won!';
	} else {
		score.innerText = 'You lost!';
	}
};

form.addEventListener("submit", playGame);