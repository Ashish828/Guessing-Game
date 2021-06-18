//getting UI variables

const minValue = document.querySelector('.min-num'),
      maxValue = document.querySelector('.max-num'),
      inputValue = document.querySelector('.input-value'),
      submitBtn = document.querySelector('#submit'),
      message = document.querySelector('.message')
      game = document.querySelector('#game');
      

//values

let min = parseInt(prompt('Enter a minimum no')),
      max = parseInt(prompt('Enter a maximum no')),
      guessLeft = 3,
      toWinNumber = randomNumber(min,max);

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

//set min and max to the UI

minValue.textContent = min;
maxValue.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
      window.location.reload();
    }
  });

//game
submitBtn.addEventListener('click',function(){

   let guessedNumber = parseInt(inputValue.value);
    
    //validate
    if(isNaN(guessedNumber) || guessedNumber<min || guessedNumber>max){
        message.textContent = `Enter a number between ${min} and ${max}`;
        inputValue.style.borderColor = 'red';
        message.style.color = 'red';
        inputValue.value='';
        
    }
    else{
    //won
    if(guessedNumber===toWinNumber){
        inputValue.disabled = 'true'
        message.textContent = `hurrah...!!! ${toWinNumber} is the correct number`;
        inputValue.style.borderColor = 'green';
        message.style.color = 'green'
        submitBtn.value = 'play again';
        submitBtn.className += 'play-again';
    }
    //losing
    else{
        guessLeft = guessLeft - 1;
        //gameover
        if(guessLeft === 0){
            inputValue.disabled = 'true'
            message.textContent = `Game over...!!! ${toWinNumber} was the correct answer...`;
            inputValue.style.borderColor = 'red';
            message.style.color = 'red'
            submitBtn.value = 'play again';
            submitBtn.className += 'play-again';
        }
        else{
        //wrong guess
            inputValue.style.borderColor = 'red';
            inputValue.value=''
            message.textContent = `wrong guess...${guessLeft} guess left...`;
            
            message.style.color = 'red'
            
        }
      }
    }
        
});




