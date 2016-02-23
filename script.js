var version = 4;
console.clear();
console.log("my programme version " + version);

function startGame() {
  document.turn = "X";
  color = "red";
  result = false;
  setMessage("It's " + document.turn + "'s turn!");
  tiles = document.getElementsByClassName('tiles');
  console.log(tiles.length);
  // check if it works, should = to 9.

  for (var i = 0; i < tiles.length; i++) {
  	tiles[i].addEventListener("click",nextMove,false);
  	// nextMove creates a new scope
  	console.log('i= ' + i)
  }
  // tiles is an array, so have to add event listener to each one.

	function setMessage(msg){
	  document.getElementById('message').innerText = msg;
	};

	function nextMove(event) {
		if (this.innerText == "") {
		this.innerText = document.turn;
		this.style.backgroundColor = color;

		console.log(event.target);
		// event.target tells you what element was clicked on
		switchTurn();
		}
		else {
			alert("that square is already used.");
		}
		// use this in a click event refers to what you're clicking
		// have to specify which tile, cannot tiles (an array)
	};

	function getBox(number){
		var value = document.getElementById('a' + number).innerText;
		// console.log(value);
		return value;
	}

	function checkRow (a, b, c, move) {
		console.log(move)
		var result = false;
		if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
			result = true;
		}
		return result;
	}
	console.log("checkRow works")

	function checkForWinner(move) {
		var result = false;
		if (checkRow(1, 2, 3, move) ||
			checkRow(4, 5, 6, move) ||
			checkRow(7, 8, 9, move) ||
			checkRow(1, 4, 7, move) ||
			checkRow(2, 5, 8, move) ||
			checkRow(3, 6, 9, move) ||
			checkRow(3, 5, 7, move) ||
			checkRow(1, 5, 9, move)) {
			result = true;
			alert(move + " WINS!");
		}
	}
	console.log("checkForWinner works");

	function switchTurn() {
		checkForWinner(document.turn);
		// move = document.turn
		// ie console log checks what is document turn for the 8 combinations

		if (document.turn == "X") {
			document.turn = "O";
			color = "blue"
			setMessage("It's " + document.turn + "'s turn!");
			}
		else {
			document.turn = "X";
			color = "red"
			setMessage("It's " + document.turn + "'s turn!");
		}
		// note: = and == 
		
	};
	console.log("switchTurn");

	var Button = document.getElementById('clearBoard');
    Button.addEventListener("click",clearBoard,false);

	function clearBoard() {
		document.turn = "X";
		for (var i = 0; i < tiles.length; i++) {
  			tiles[i].innerText = "";
  			tiles[i].style.backgroundColor = "white";
  		}
	};
};
window.addEventListener("load",startGame,false);