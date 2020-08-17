document.addEventListener("DOMContentLoaded", () => {
  //card options

  const cardArray = [
    {
      name: "dona",
      img: "img/dona.jpg",
    },
    {
      name: "dona",
      img: "img/dona.jpg",
    },
    {
      name: "huevo",
      img: "img/huevo.jpg",
    },
    {
      name: "huevo",
      img: "img/huevo.jpg",
    },
    {
      name: "pan",
      img: "img/pan.jpg",
    },
    {
      name: "pan",
      img: "img/pan.jpg",
    },
    {
      name: "pizza",
      img: "img/pizza.jpg",
    },
    {
      name: "pizza",
      img: "img/pizza.jpg",
    },
    {
      name: "taco",
      img: "img/taco.jpg",
    },
    {
      name: "taco",
      img: "img/taco.jpg",
    },
    {
      name: "torta",
      img: "img/torta.jpg",
    },
    {
      name: "torta",
      img: "img/torta.jpg",
    },
  ];
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "img/cover.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  cardArray.sort(() => 0.5 - Math.random());

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "img/blanco.jpg");
      cards[optionTwoId].setAttribute("src", "img/blanco.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/cover.jpg");
      cards[optionTwoId].setAttribute("src", "img/cover.jpg");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations!";
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
