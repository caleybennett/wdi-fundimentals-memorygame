
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",

},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage:"images/king-of-diamonds.png", 
}
];
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardID) {
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch()
	if (cardsInPlay[0] === cardsInPlay[1]) {
		result = alert("You found a match!");
	} else {
		result = alert("Sorry, try again")
	}
	console.log("user flipped " + cards[cardID].rank)
	console.log(cards[cardID].cardImage)
	console.log(cards[cardID].suit)

	}
flipCard(0)
flipCard(2)


