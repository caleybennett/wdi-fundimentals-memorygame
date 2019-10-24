
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
function flipCard() {
	var cardID= this.getAttribute ("data-id")
	checkForMatch()
	this.setAttribute("src", cards[cardID].cardImage)
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		result = alert("You found a match!");
	} else {cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1])
		result = alert("Sorry, try again")
	}
	console.log("user flipped " + cards[cardID].rank)
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage)
	console.log(cards[cardID].suit)
}
function createBoard (){
for (var i = 0; i < cards.length; i++){
	console.log(cards[i]);
	var cardElement = document.createElement('img');
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i)
	cardElement.addEventListener("click", flipCard);
	document.getElementById("game-board").appendChild(cardElement);
	}
}
createBoard ();

