"use strict";
//DOM
/*
console.log(document.querySelector('.message').textContent);
//reading the content
document.querySelector('.message').textContent = 'Correct Number';
//changing the content

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// Handling Click Events
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
const guess = Number(document.querySelector(".guess").value);
console.log(guess, typeof guess);

 //when player inputs nothing
if (!guess) {
    // document.querySelector('.message').textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!")
// when player wins
} else if(guess === secretNumber ) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayMessage('🥳 Correct Number!') ;

    document.querySelector('body').style.backgroundColor = '#60b347';
    
    document.querySelector('.number').style.width = '30rem'; 
    
    document.querySelector(".number").textContent = secretNumber;
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

//when guess is wrong  
} else if (guess !== secretNumber){
   if(score > 1){
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;    
    } else {
    // document.querySelector('.message').textContent = '💥 You lost the game!'
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;   
  }
}
});
// //when number guess is too high  
// } else if (guess > secretNumber){
//     if(score > 1){
//       document.querySelector('.message').textContent = '📈 Too High!'
//       score--;
//       document.querySelector('.score').textContent = score;    
//     } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!'
//     document.querySelector('.score').textContent = 0;   
//   }

// //when guess is too low  
// } else {
//     if (score > 1){
//      document.querySelector('.message').textContent = '📉 Too Low!'
//      score--;
//      document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game'
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#8B0000'
//     }

document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    secretNumber =  Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highScore;
  }
)