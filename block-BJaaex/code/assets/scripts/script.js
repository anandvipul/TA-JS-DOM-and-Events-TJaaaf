"use strict";
var gameMode = false;
var countTotal = 0;

let globalCount = 0;

var cardsArray = [
  {
    name: "shell",
    img: "assets/media/img/blueshell.png",
  },
  {
    name: "star",
    img: "assets/media/img/star.png",
  },
  {
    name: "bobomb",
    img: "assets/media/img/bobomb.png",
  },
  {
    name: "mario",
    img: "assets/media/img/mario.png",
  },
  {
    name: "luigi",
    img: "assets/media/img/luigi.png",
  },
  {
    name: "peach",
    img: "assets/media/img/peach.png",
  },
  {
    name: "1up",
    img: "assets/media/img/1up.png",
  },
  {
    name: "mushroom",
    img: "assets/media/img/mushroom.png",
  },
  {
    name: "thwomp",
    img: "assets/media/img/thwomp.png",
  },
  {
    name: "bulletbill",
    img: "assets/media/img/bulletbill.png",
  },
  {
    name: "coin",
    img: "assets/media/img/coin.png",
  },
  {
    name: "goomba",
    img: "assets/media/img/goomba.png",
  },
];

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = "";
var secondGuess = "";
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById("game");
var grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
    img = item.img;

  var card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = name;

  var front = document.createElement("div");
  front.classList.add("front");

  var back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = "url(" + img + ")";

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll(".selected");
  selected.forEach(function (card) {
    card.classList.add("match");
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll(".selected");
  selected.forEach(function (card) {
    card.classList.remove("selected");
  });
};

grid.addEventListener("click", function (event) {
  var clicked = event.target;
  gameMode = true;
  globalCount += 1;

  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      //   console.log(firstGuess);
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      //   console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        //while condition to know if all the items have .match class
        countTotal += 1;
        if (countTotal == 12) {
          gameMode = false;
        //   d2 = new Date();
        //   let duration = Math.abs(d2 - d1);
        //   console.log(`${duration} milliseconds`);
          alert(`You took ${globalCount} for the game.`);
        }
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
