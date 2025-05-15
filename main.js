let cards = [];
let sum = 0;
let hasBlackJack = false;
let message = "";
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Woohoo! You have got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    // Disable the "New Card" button if the game is over
    document.querySelector("button[onclick='newCard()']").disabled = !isAlive || hasBlackJack;
}

function startGame() {
    cards = [getRandomCard(), getRandomCard(), getRandomCard(), getRandomCard()]; // Draw 4 cards
    sum = cards.reduce((acc, card) => acc + card, 0); // Calculate the sum of 4 cards
    isAlive = true;
    hasBlackJack = false;
    renderGame(); // Render the game state
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame(); // Re-render the game with the new card
    }
}






