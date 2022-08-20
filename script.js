let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
document.querySelector('.highest').textContent = highScore;

const oncheck = () => {
    event.preventDefault();
    const guess = document.querySelector('.answer-box').value;
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = '😕 No Number';
    } else if (guess == secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '😍 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.answer-box').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highest').textContent = highScore;
        }

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🥵 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ Lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🙄 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ Lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
}
document.querySelector('.again').addEventListener("click", () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = 'wheat';
    document.querySelector('.answer-box').style.backgroundColor = 'wheat';
})