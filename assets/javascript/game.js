var wins=0;

function reset(){                    //reset function, doesn't run unless a game is won
    var wordBank= [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran♀",
    "nidorina",
    "nidoqueen",
    "nidoran♂",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetch'd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr. mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew"];

    window.wordBank=wordBank;
    var lives=8;
    window.lives=lives;
    var currentWord = wordBank[Math.floor(Math.random()*151)+1];
    window.currentWord=currentWord;
    var wordLength = currentWord.length;
    window.wordLength=wordLength;
    console.log(wordLength);

    var answerArray=[];

    console.log(answerArray);

    for (i=0;i<wordLength;i++){
        console.log("_");           
        answerArray.push("_");
    };

    console.log(answerArray);

    document.getElementById("life").innerHTML = lives;

    document.getElementById("wins").innerHTML = wins;

    var answerArray2=answerArray.join(" ");  //This gets rid of the commas between the array elements

    console.log(answerArray2);
    console.log(currentWord);
    

    document.getElementById("word").innerHTML = answerArray2;

    console.log(answerArray2);

    var guessedLetters=[];
    window.guessedLetters = guessedLetters;
    document.getElementById("guessed").innerHTML=guessedLetters;
    window.answerArray = answerArray;
    console.log(answerArray.indexOf("_"));

    e=[];
    window.e=e;
}
//end of reset function





    var wordBank= [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran♀",
    "nidorina",
    "nidoqueen",
    "nidoran♂",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetch'd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr. mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew"];

    var lives=8;


    console.log(wordBank[2]);


    var currentWord = wordBank[Math.floor(Math.random()*151)+1];

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


    //starting function for onkeyup
    document.onkeyup=function(event){
        console.log(answerArray.indexOf("_"));
        console.log(answerArray)
    var userInput = event.key; 
        console.log(lives);
 
    console.log(answerArray.indexOf("_"));

    var check = currentWord.indexOf(userInput);

    console.log(answerArray.indexOf("_"));


    //guessed letters

guessedLetters.push(userInput);

var e=document.getElementById("guessed").innerHTML = guessedLetters;   //document last guess
console.log(guessedLetters);
for (var n=0;n<guessedLetters.length;n++){
    e.textContent+=guessedLetters[i];
}


document.getElementById("guessed").innerHTML = guessedLetters;   //document last guess

    //guessed letters
    console.log(answerArray.indexOf("_"));
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
console.log(answerArray.indexOf("_"));
document.getElementById("life").innerHTML = lives;
if (lives==0){
    window.location.reload();
}

console.log(answerArray.indexOf("_"));

var answerArray2=answerArray.join(" ");

document.getElementById("word").innerHTML = answerArray2;


    console.log(answerArray.indexOf("_"));
if (answerArray.indexOf("_")==-1) {
    console.log(answerArray.indexOf("_"));
    wins++;
    document.getElementById("wins").innerHTML = wins;
    reset();

}



}
//ending function for onkeyup





console.log("hi");

console.log(answerArray);


