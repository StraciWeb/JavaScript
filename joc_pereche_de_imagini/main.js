const startGame = document.getElementById("start__game");
const gameBoard = document.getElementById('gameBoard');
const newGameBtn = document.getElementById("new__game");
const newGame = document.createElement("div");
const newGameOptions = document.createElement("h2");
const newGameBoardSize = document.createElement("input");
const newGameStart = document.createElement("button");
const finalGame = document.createElement("div");
const finalGameText = document.createElement("h3");
const finalGameClose = document.createElement("button");

newGame.classList.add("new__game");
finalGame.classList.add("final__game");
newGameStart.classList.add("btn");
newGameBtn.classList.add("btn");
finalGameClose.classList.add("btn");
newGameBoardSize.classList.add("board__size");

newGameOptions.textContent = "Selectati nr. de perechi de imagini";
newGameBoardSize.type = "number";
newGameBoardSize.placeholder = "Introduceti nr. de perechi";
newGameStart.textContent = "Start joc";

finalGameText.textContent = "Jocul s-a finisat";
finalGameClose.textContent = "Inchide";

finalGame.append(finalGameText, finalGameClose);
newGame.append(newGameOptions, newGameBoardSize, newGameStart);
startGame.append(newGame, finalGame);



const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🍋'];

let cards = [];

newGameStart.addEventListener("click", () => {
    gameBoard.innerHTML = "";
    const pairsCount = (Number(newGameBoardSize.value) * 2);
    const firstArray = symbols.slice(0, pairsCount);
    const secondArray = symbols.slice(0, pairsCount);
    cards = [...firstArray, ...secondArray];

    shuffle(cards);
    
    cards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
    startGame.append(newGameBtn);
    newGame.classList.remove("open");
    newGameBoardSize.value = "";
})

newGameBtn.addEventListener("click", ()=> {
    newGame.classList.add("open");
    newGameBtn.remove();
})

finalGameClose.addEventListener("click", () => {
    finalGame.classList.remove("open");
    gameBoard.innerHTML = "";
})

let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) {
        return;
    }
    if (this === firstCard) {
        return;
    }

    this.classList.add('flipped');
    this.textContent = this.dataset.symbol;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        disableCards();
    } else {
        unflipCards();
    }
    if (cards.length === document.querySelectorAll('.flipped').length) {
            finalGame.classList.add("open");
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

