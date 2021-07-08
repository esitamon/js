// variable operations

let userNumber= prompt("We are playing guess my number \n Please enter a value between 1 to 13 -- ");
let gameArray = [1,4,5,6,7,8,9,10,11,12,13];

//function to pick number from array automatically 

let aiNumber = function(gameArray){

    let min , nax ; [min, max] = [1,10];

    let randNum = Math.random(max);
    let randValue = Math.floor((randNum*max)+1);
    
    return gameArray[randValue];

}
//alert(aiNumber(gameArray));
// function to check if picked number is correct 

let checkedNum = function (){
       
    let aiVal = aiNumber(gameArray);
    console.log(aiVal);
    
    if (userNumber == aiVal){
        alert("Congrat you beat the computer");
    }else{
        alert("You missed , the computer pick "+ aiVal);
        console.log(aiVal);
    }

}

let play = function (){
    checkedNum();
}
    
play();
// function to display response to use

/*let display = function(){

    alert(checkedNum());
}*/
