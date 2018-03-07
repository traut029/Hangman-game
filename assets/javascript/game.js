var wins=0;
reset()

function reset(){
var wordBank= ["contemplate", "array", "component", "disguise", "circumspect","catapult","university","banal","deviate","canary", "hostility"];

var lives=8;


console.log(wordBank[2]);


var currentWord = wordBank[Math.floor(Math.random()*10)+1];

console.log(currentWord);

var wordLength = currentWord.length;

console.log(wordLength);

var answerArray=[];



for (i=0;i<wordLength;i++){
    console.log("_");           
    answerArray.push("_");
};

console.log(answerArray);

document.getElementById("life").innerHTML = lives;

document.getElementById("wins").innerHTML = wins;

var answerArray2=answerArray.join(" ");  //This gets rid of the commas between the array elements

document.getElementById("word").innerHTML = answerArray2;

var guessedLetters=[];
}
//starting function for onkeyup
document.onkeyup=function(event){
var userInput = event.key;                                                    

var check = currentWord.indexOf(userInput);

    //guessed letters

guessedLetters.push(userInput);

var e=document.getElementById("guessed").innerHTML = guessedLetters;   //document last guess

for (var n=0;n<guessedLetters.length;n++){
    e.textContent+=guessedLetters[i];
}


document.getElementById("guessed").innerHTML = guessedLetters;   //document last guess

    //guessed letters

console.log(userInput);
if (check==-1){
    lives--;
};

for(i=0;i<currentWord.length;i++){
    if (currentWord.charAt(i)===userInput){   //currentWord is string
        answerArray[i]=userInput;               //answerArray iss array
    };
};
console.log(answerArray);

document.getElementById("life").innerHTML = lives;
if (lives==0){
    window.location.reload();
}

console.log(answerArray.indexOf("_"));
if (answerArray.indexOf("_")==-1) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    reset();

}


var answerArray2=answerArray.join(" ");

document.getElementById("word").innerHTML = answerArray2;
}
//ending function for onkeyup

function reset(){
    currentWord = wordBank[Math.floor(Math.random()*10)+1];
    guessedLetters=[]
    document.getElementById("word").innerHTML = answerArray2;





}



console.log("hi");

console.log(answerArray);