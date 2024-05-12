'use strict';
console.log('Guess the number');

let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log('secretNumber: ', secretNumber)
    if(!guess){
        document.querySelector('.message').textContent = " Not a Number";

        
    }else if (guess === secretNumber){

        document.querySelector('.message').textContent = " 🎉 Correct Number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }

    }else if(guess > secretNumber){
        document.querySelector('body').style.backgroundColor = '#222';
        if(score > 0 ){
            document.querySelector('.message').textContent = "📈 Too high!";   
            score --;
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = "💥 You lost the game!";   
        }
        
    }else if(guess < secretNumber){
        document.querySelector('body').style.backgroundColor = '#222';    
        if(score > 0 ){
            document.querySelector('.message').textContent = " 📉 Too low!";
            score --;
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = "💥 You lost the game!";   
        }
       
    }
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';   

})