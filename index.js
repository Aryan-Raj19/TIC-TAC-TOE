console.log("Enjoy the game");
let turn = "X";
let isgameover = false;
let scoreplayer1 = 0;
let scoreplayer2 = 0;
let tie = 0;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

let boxtext = document.getElementsByClassName("box-text");

let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const toWin = () => {
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.getElementsByClassName("details")[0].innerText = boxtext[e[0]].innerText + " Won";

      isgameover = true;
      boxtext[e[0]].style.color = "#d74242";
      boxtext[e[1]].style.color = "#d74242";
      boxtext[e[2]].style.color = "#d74242";
      if (boxtext[e[0]].innerText === "X") {
        scoreplayer1++;
        document.querySelector(".player-one-score").innerText = scoreplayer1;
      } else if (boxtext[e[0]].innerText === "0") {
        scoreplayer2++;
        document.querySelector(".player-two-score").innerText = scoreplayer2;
      }
    } else {
      totie();
      // document.getElementsByClassName("details")[0].innerText = "Match Tied";
    }
  });
};

const totie = () => {
  if (
    boxtext[0].innerText !== "" &&
    boxtext[1].innerText !== "" &&
    boxtext[2].innerText !== "" &&
    boxtext[3].innerText !== "" &&
    boxtext[4].innerText !== "" &&
    boxtext[5].innerText !== "" &&
    boxtext[6].innerText !== "" &&
    boxtext[7].innerText !== "" &&
    boxtext[8].innerText !== ""
  ) {
    tie++;
    document.querySelector(".tie-times").innerText = tie / 8;
    setTimeout(restart, 1500);
    setTimeout(newgame, 1600);
    boxtext[0].style.color = "#a6a6a6";
    boxtext[1].style.color = "#a6a6a6";
    boxtext[2].style.color = "#a6a6a6";
    boxtext[3].style.color = "#a6a6a6";
    boxtext[4].style.color = "#a6a6a6";
    boxtext[5].style.color = "#a6a6a6";
    boxtext[6].style.color = "#a6a6a6";
    boxtext[7].style.color = "#a6a6a6";
    boxtext[8].style.color = "#a6a6a6";
  }
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((e) => {
  let move = e.querySelector(".box-text");
  e.addEventListener("click", () => {
    if (move.innerText === "") {
      move.innerText = turn;
      turn = changeTurn();
      toWin();
      if (isgameover) {
        setTimeout(restart, 1500);
        setTimeout(newgame, 1600);
      } else {
        document.getElementsByClassName("details")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

const restart = () => {
  Array.from(boxes).forEach((e) => {
    let boxtexts = e.querySelector(".box-text");
    boxtexts.innerText = "";
  });
  boxtext[0].style.color = "white";
  boxtext[1].style.color = "white";
  boxtext[2].style.color = "white";
  boxtext[3].style.color = "white";
  boxtext[4].style.color = "white";
  boxtext[5].style.color = "white";
  boxtext[6].style.color = "white";
  boxtext[7].style.color = "white";
  boxtext[8].style.color = "white";
};

const newgame = () => {
  Array.from(boxes).forEach((e) => {
    e.style.color = "white";
    isgameover = false;
    document.getElementsByClassName("details")[0].innerText =
      "Click on box to start new Game";
    turn = changeTurn();
    let boxtexts = e.querySelector(".box-text");
    e.addEventListener("click", () => {
      if (boxtexts.innerText === "") {
        boxtexts.innerText = turn;
        turn = changeTurn();
      }
    });
  });
};
