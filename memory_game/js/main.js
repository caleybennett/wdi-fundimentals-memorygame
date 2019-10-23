
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardID) {
	cardsInPlay.push(cards[cardID]);
	checkForMatch()
	if (cardsInPlay[0] === cardsInPlay[1]) {
		result = alert("You found a match!");
	} else {
		result = alert("Sorry, try again")
	}
	console.log("user flipped " + cards[cardID])

	}
flipCard(0)
flipCard(2)


