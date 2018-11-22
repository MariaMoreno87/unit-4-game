var charactorChoice;
var defendrArea;
var attack;
var hp;
var healthPoints;
var attackPower;
var counterAttackPower;
var attackPoints;
var enemiesDefeted= [];
var currentFighter;
var currentEnemy;
var rounds = 0;
var charactersArray = [{
    "name": "Chewbacca", "image": "./assets/images/Chewbacca.jpg", "health points": " ", "attack Powers": "", "Counter Attack Power": 10
},
{ "name": "Jedi", "image": "./assets/images/Jedi.jpg", "health points": " ", "attack Powers": "", "CounterAttackPower": 20 },
{ "name": "Sith", "image": "./assets/images/Sith.jpg", "health points": " ", "attack Powers": "", "Counter Attack Power": 35 },
{ "name": "Vader", "image": "./assets/images/Vader.jpg", "health points": " ", "attack Powers": "", "Counter Attack Power": 30 }]

// * Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.
//   * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.
// * The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.
// * No characters in the game can heal or recover Health Points. 
//   * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. 
//   * This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options
// would mess with this dynamic.
var goodCharacterSelectionText = $("#goodcharacterselection");
var enemiesSelectionText = $("#enemiesselectiontext");
var yourCharacterText = $("#yourcharactertext");
var fightSelectionText = $("#fightselectiontext");
var defenderText = $("#defendertext");
var gameCharacters = $("#characterimg");
var playersChoice = $("#yourCharacterChoice");
var enemies = $("#enemiesAvailable");
var defendStats = $("#Defender");
var btnAttack = $("#btnAttack");


function playerSelection(character) {
    currentFighter = getCurrentCharacter(character);//save player character object to global variable
    var img = getCharacterImage(character);//Get image of the players selected character
    var charImg = '<img id="' + character + 'good" class="goodguy" src="' + img + '">';//create our html string to append
    playersChoice.append(charImg);//append our html string with image
    gameCharacters.toggle();//hide characters images
    goodCharacterSelectionText.toggle();//hide character selection text
    yourCharacterText.toggle();//show your character selection text
    enemiesSelectionText.toggle();//show enemies to choose from
    makeEnemies(character);//call funtion to generate our enemies

}

function playerSelectionBadGuy(badGuy) {
    currentEnemy =getCurrentCharacter(badGuy);//set the current bad guy object
    var img = getCharacterImage(badGuy);//get the bad guy image
    var charImg = '<img id="' + badGuy + 'bad" class="badguy" src="' + img + '">';//create our html string to append
    defendStats.append(charImg);//append our html string with image
    enemiesSelectionText.toggle();//hide choose an enemy text
    fightSelectionText.toggle();//hide fight slection text
    enemies.toggle();//hide list of enemies
    btnAttack.toggle();//show attak button
    defenderText.toggle();//show defender text
}

function loadCharacters() {
    $.each(charactersArray, function (i, character) {
        var charImg = '<img id="' + character.name + '" class="playerselection" src="' + character.image + '">';
        gameCharacters.append(charImg);
    });
}


function addEventOnClickGoodGuys() {
    $.each(charactersArray, function (i, character) {
        $("#" + character.name).on("click", function () {
            playerSelection(character.name);
        });
    });
}

function addEventOnClickBadGuys(badGuy) {
        $("#enemy" + badGuy).on("click", function () {
            playerSelectionBadGuy(badGuy);
        });
}

function makeEnemies(goodGuy) {
    $.each(charactersArray, function (i, character) {
        if (character.name != goodGuy) {
            var charImg = '<img id="enemy' + character.name + '" class="selectbadguy" src="' + character.image + '"">';
            enemies.append(charImg);
            addEventOnClickBadGuys(character.name);
        }
    });
}

// function addEventOnAttack() {
// currentEnemy.
// };

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


function initializeGame() {
    loadCharacters();
    addEventOnClickGoodGuys();
    yourCharacterText.toggle();
    enemiesSelectionText.toggle();
    fightSelectionText.toggle();
    btnAttack.toggle();
    defenderText.toggle();
}

$(function () {
    initializeGame();
});