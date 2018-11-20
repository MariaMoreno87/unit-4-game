var charectorChoice;
var defendrArea;
var attack;
var hp;
var healthPoints;
var attackPower;
var counterAttackPower;
var attackPoints;
var charactersArray = [{
"name": "Chewbacca", "image": "./assets/images/Chewbacca.jpg", "health points": " ", "attack Powers": "" , "Counter Attack Power": 10},
{ "name": "Jedi", "image": "./assets/images/Jedi.jpg","health points": " ", "attack Powers": "" , "Counter Attack Power": 20 },
{ "name": "Sith", "image": "./assets/images/Sith.jpg","health points": " ", "attack Powers": "" , "Counter Attack Power": 35 },
{ "name": "Vader", "image": "./assets/images/Vader.jpg","health points": " ", "attack Powers": "" , "Counter Attack Power": 30 }]

// * Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.
 

//   * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

// * The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

// * No characters in the game can heal or recover Health Points. 

//   * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. 
//   * This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options
 // would mess with this dynamic.


 //get DOM elements
 var gameCharecters = $("#charecterimg");
 var layersChoice = $("#yourCharecterChoice");
 var enemies = $("#enemiesAvailable");
 var defendStats = $("#Defender");


 // add img to page add name and attackpoints to picture
 gameCharecters.attr("src", getCharacterImage("Jedi"))

// start game when player picks the cherecter it goes into the your charecter and the rest goes into ememies availabele to attack.
//get the currenct character image to display
function getCharacterImage(currentCharacterImg) {
    var character = getCurrentCharacter(currentCharacterImg);
    return character.image;
}

//get the selected character objec from the charactersArray
function getCurrentCharacter(currentCharacter) {
    // return charactersArray.find(function(character) {
    //     character.name === currentCharacter;
    // })
    return charactersArray.find(character => character.name === currentCharacter);//used arrow function to cleanup code
}

// * Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
//   * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
// * The enemy character only has `Counter Attack Power`.