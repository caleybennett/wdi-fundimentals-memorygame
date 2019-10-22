// console.log("Up and running!");
// console.log("User flipped " + cardOne);

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		result = alert("You found a match!");
	} else {
		result = alert("Sorry, try again")
	}
}
console.log("User flipped " + cardOne);

