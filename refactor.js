class game {

    constructor(userInput){

        this.userInput = userInput;
    }
    
    set userinput(x){
        if(x > 13 &&  x < 1){

            this.userInput = x ;
        }
    }

    
    
   aiNumber(){
    let gameArray = [1,4,5,6,7,8,9,10,11,12,13];
    let min , max ; [min, max] = [1,10];

    let randNum = Math.random(max);
    let randValue = Math.floor((randNum*max)+1);
    
    return gameArray[randValue];

   }

    playAgame(){
        let gameArray = [1,4,5,6,7,8,9,10,11,12,13];
        let aiVal = this.aiNumber(gameArray);
        console.log(aiVal);
        
        if (this.userInput == aiVal){
            alert("Congrat you beat the computer");
        }else{
            alert("You missed , the computer pick "+ aiVal);
            console.log(aiVal);
        }

    }
}

let userinput = prompt("Please pick a number 1-13: ");
let newGame = new game(userinput);
newGame.playAgame();
