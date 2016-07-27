// pseudo 01: check javascript link working

document.write("js link check - to be comment out later");

// pseudo 02: this hw for me is to practice manila js and jq. 
// Therefore, I intend to do js coding 1st then switch to jq.

// pseudo 03: this is also an experiment on my approach which
// is to do skeleton code with static variables then switch to randomizer and object

// pseudo 04: assign variable for game-target, wins, losses, game-match-counter, and the buttons.

var gameTarget = 24;

var totalAdded = 0;

var numberToAdd = 0;

var wins = 0;

var losses = 0;

var button1 = 12;

var button2 = 1;

var button3 = 4;

var button4 = 6;

document.querySelector("#game-target").innerHTML = gameTarget;

// // pseudo 05: define function to reset variables when webpage load

// var gameReset = function() {
// 	// body...
// 	gameTarget = 39;
// 	totalAdded = 0;
// 	numberToAdd = 0;
// 	wins = 0;
// 	losses = 0;
// 	var button1 = 12;
// 	var button2 = 1;
// 	var button3 = 4;
// 	var button4 = 6;
// };

// // pseudo 06: define function to reset game-target and game-match-counter
// // when game-match-counter > or = to game-target

// var matchReset = function() {
// 	// body...
// 	gameTarget = 39;

// 	numberToAdd = 0;
// 	var button1 = 12;
// 	var button2 = 1;
// 	var button3 = 4;
// 	var button4 = 6;
// };

// pseudo 07: define function to add if game-match-count < game-target

		// document.getElementById("game-choice-01").onclick = function() {myFunction()};

		// function myFunction() {
		//     document.getElementById("game-match-counter").innerHTML = "YOU CLICKED ME!";
		// }

document.getElementById("game-choice-01").onclick = function(){
	document.getElementById("game-alert").innerHTML = null;
	numberToAdd = button1;
	totalAdded += numberToAdd;
	console.log(gameTarget);
	console.log(totalAdded);
	
	if (totalAdded == gameTarget){
		gameTarget = 63;
		totalAdded = 0;
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#game-match-counter").innerHTML = 0;
		document.querySelector("#game-target").innerHTML = gameTarget;
		document.getElementById("game-alert").innerHTML = "You Won!";

	}else if (totalAdded > gameTarget){
		gameTarget = 48;
		totalAdded = 0;
		losses++;
		document.querySelector("#losses").innerHTML = losses;
		document.querySelector("#game-match-counter").innerHTML = 0;
		document.querySelector("#game-target").innerHTML = gameTarget;
		document.getElementById("game-alert").innerHTML = "You Lost!";
	}

	document.querySelector("#game-match-counter").innerHTML = totalAdded;

};



// document.getElementById("game-choice-01").onclick = function(){
// 	numberToAdd = button1;
// 	totalAdded += numberToAdd;
// 	console.log(gameTarget);
// 	console.log(totalAdded);
// 	if (totalAdded < gameTarget){

// 		document.querySelector("#game-match-counter").innerHTML = totalAdded;

// 	}else if (totalAdded > gameTarget){
// 		gameTarget = 48;
// 		totalAdded = 0;

// 		losses++;
// 		document.querySelector("#losses").innerHTML = losses;
// 		document.querySelector("#game-match-counter").innerHTML = 0;
	
// 	}
// 	else (totalAdded = gameTarget){
// 		gameTarget = 63;
// 		totalAdded = 0;

// 		wins++;
// 		document.querySelector("#losses").innerHTML = wins;
// 		document.querySelector("#game-match-counter").innerHTML = 0;
// 	}

// };

// psudeo 08: define function to generate random numbers for game-target and buttons


