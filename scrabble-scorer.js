// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'] 
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
  
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = "";
function initialPrompt() {
 word = input.question(`Let's play some scrabble! 
 Enter a word for points: `);
console.log( `${word}
${scorerPrompt(word)}`);
   return word;
};

let simpleScorer = function(word){
   word = word.toUpperCase();
 let score = word.length ;
 for (i = 0; i < word.length; i++){
   console.log(word[i], '+ 1');
 }
 return console.log('your word value is:', score);
}

let vowelBonusScorer = function(word){
   word = word.toUpperCase();
   let vowel = ['A','E','I','O','U'];
   let vScore = 0;
   
   for (i = 0; i < word.length; i++){
      let newstr = word[i];
      if (vowel.includes(newstr)){
        vScore = vScore + 3;
         console.log(word[i], "+ 3");
      } else {
        vScore = vScore + 1;
        console.log(word[i], "+ 1");
      }
      
   }
   return console.log('Your word value is :', vScore)
}

let scrabbleScorer;

const scoringAlgorithms = [
   {name: 'Scramble', Discription: "Each letter is worth 1 point.", ScoreFunction: simpleScorer},
   {name: 'BonusVowels', Discription: "Vowels are 3pts, constants are 1 pt." , ScoreFunction: vowelBonusScorer},
   {name: 'SimpleScore', Discription: "The traditional scoring algorithm." , ScoreFunction: transform}
];

function scorerPrompt() {
   let answer = input.question(`Which scoring algorithm would you like to use today?
   0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].Discription}
   1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].Discription}
   2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].Discription}
   Enter 0, 1, or 2 to get your score! :`);
   answer = Number(answer);
   if (!isNaN(answer) && answer < 3);{
       console.log(answer);
       return scoringAlgorithms[answer].ScoreFunction(word);
     
   }
}

function transform(word) {

   let sco = 0;
   let nstr;
   let str;
   for (let i = 0; i < word.length; i++) {
         str = word[i]
         console.log(str, '+', newPointStructure[str])

 
      for (const X in newPointStructure) {
         nstr = X
       if (str == nstr){
          sco = newPointStructure[X] + sco
         }
         
      }
   }
      console.log('Your word value is:', sco);
    return nstr;
 

}

let newPointStructure = 
   {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10}
;


function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
