// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Scissors

selection = {
  human: "",
  computer: "",
};

let scorePlayer = 0;
let scoreComputer = 0;

gameRule = {
  Rock: {
    win: "Scissor",
    defeat: "Paper",
  },
  Paper: {
    win: "Rock",
    defeat: "Scissor",
  },
  Scissor: {
    win: "Paper",
    defeat: "Rock",
  },
};

function randomChoice() {
  choices = {
    0: "Rock",
    1: "Paper",
    2: "Scissor",
  };
  let randomIndex = Math.round(Math.random() * 2);
  return choices[randomIndex];
}

function choiceMaker(event) {
  console.log(event.target.dataset.choice);
}

function matchSelection(event) {
  let str = event.target.dataset.choice.split(" ");
  str[1] == "Human"
    ? (selection[`human`] = `${str[0]}`)
    : (selection["computer"] = `${str[0]}`);
  if (selection["human"] != "" && selection["computer"] != "") {
    console.log("sucess");
    game(selection['human'], selection['computer']);
    selection["human"] = "";
    selection["computer"] = "";
    setTimeout(() => {document.querySelector('#computerChoice').innerText = "";
    document.querySelector('#playerChoice').innerText = "";}, 2000);
  }
}

function game(player, computer) {
  if (player == "Rock") {
    computer == "Scissor" || computer == "Paper"
      ? computer == "Scissor"
        ? scorePlayer += 1
        : scoreComputer += 1
      : console.log("Its a Tie");
  }

  if (player == "Paper") {
    computer == "Scissor" || computer == "Rock"
      ? computer == "Rock"
        ? scorePlayer += 1
        : scoreComputer += 1
      : console.log("Its a Tie");
  }

  if (player == "Scissor") {
    computer == "Rock" || computer == "Paper"
      ? computer == "Paper"
        ? scorePlayer += 1
        : scoreComputer +=1
      : console.log("Its a Tie");
  }
  document.querySelector("#playerScore").innerText = scorePlayer;
  document.querySelector("#computerScore").innerText = scoreComputer;
}

let gc = document.querySelector("div.game-container");
gc.addEventListener("click", (event) => matchSelection(event));


let cc = document.querySelector("div#computer");
cc.addEventListener("click", (event) => document.querySelector('#computerChoice').innerText = event.target.dataset.choice.split(" ")[0]);


let pc = document.querySelector("div#player");
pc.addEventListener("click", (event) => document.querySelector('#playerChoice').innerText = event.target.dataset.choice.split(" ")[0]);


function resetAll() {
  scoreComputer = 0;
  scorePlayer = 0;
  document.querySelector("#playerScore").innerText = scorePlayer;
  document.querySelector("#computerScore").innerText = scoreComputer;
}