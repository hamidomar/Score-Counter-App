const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#resetButton')
const winningScoreSelect = document.querySelector('#playto')

let p1score = 0;
let p2score = 0;
let isGameOver = false;
let winningScore = 3;

p1Button.addEventListener('click', function(){
    if(isGameOver === false){
        p1score += 1
        }if(p1score === winningScore){
            isGameOver = true
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1score
})

p2Button.addEventListener('click', function(){
    if(isGameOver === false){
        p2score += 1
        }if(p2score === winningScore){
            isGameOver = true
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2score
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false
    p1score = 0;
    p2score = 0;
    p1Display.textContent = p1score;
    p2Display.textContent = p2score;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false
    p2Button.disabled = false

}

winningScoreSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value);
})