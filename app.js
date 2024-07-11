let currentTurn = "X";
function printXAnd0(ele) {
  if (ele.innerHTML === "") {
    if (currentTurn === "X") {
      ele.innerHTML = "<h2>X</h2>";
      currentTurn = "0";
    } else {
      ele.innerHTML = "<h2>0</h2>";
      currentTurn = "X";
    }
  }
  ele.removeAttribute("onclick"); // Remove click event after placing X or 0
  checkWinner();
}

function checkWinner() {
  let boxOne = document.querySelector(".b-one").innerText;
  let boxTwo = document.querySelector(".b-two").innerText;
  let boxThree = document.querySelector(".b-three").innerText;
  let boxFour = document.querySelector(".b-four").innerText;
  let boxFive = document.querySelector(".b-five").innerText;
  let boxSix = document.querySelector(".b-six").innerText;
  let boxSeven = document.querySelector(".b-seven").innerText;
  let boxEight = document.querySelector(".b-eight").innerText;
  let boxNine = document.querySelector(".b-nine").innerText;
  let winner = document.querySelector(".winner");

  // Check rows
  if (
    (boxOne === "X" && boxTwo === "X" && boxThree === "X") ||
    (boxFour === "X" && boxFive === "X" && boxSix === "X") ||
    (boxSeven === "X" && boxEight === "X" && boxNine === "X")
  ) {
    winner.innerHTML = "PLAYER ONE WIN!";
    resetGame();
  } else if (
    (boxOne === "0" && boxTwo === "0" && boxThree === "0") ||
    (boxFour === "0" && boxFive === "0" && boxSix === "0") ||
    (boxSeven === "0" && boxEight === "0" && boxNine === "0")
  ) {
    winner.innerHTML = "PLAYER TWO WIN!";
    resetGame();
  }

  // Check columns
  else if (
    (boxOne === "X" && boxFour === "X" && boxSeven === "X") ||
    (boxTwo === "X" && boxFive === "X" && boxEight === "X") ||
    (boxThree === "X" && boxSix === "X" && boxNine === "X")
  ) {
    winner.innerHTML = "PLAYER ONE WIN!";
    resetGame();
  } else if (
    (boxOne === "0" && boxFour === "0" && boxSeven === "0") ||
    (boxTwo === "0" && boxFive === "0" && boxEight === "0") ||
    (boxThree === "0" && boxSix === "0" && boxNine === "0")
  ) {
    winner.innerHTML = "PLAYER TWO WIN!";
    resetGame();
  }

  // Check diagonals
  else if (
    (boxOne === "X" && boxFive === "X" && boxNine === "X") ||
    (boxThree === "X" && boxFive === "X" && boxSeven === "X")
  ) {
    winner.innerHTML = "PLAYER ONE WIN!";
    resetGame();
  } else if (
    (boxOne === "0" && boxFive === "0" && boxNine === "0") ||
    (boxThree === "0" && boxFive === "0" && boxSeven === "0")
  ) {
    winner.innerHTML = "PLAYER TWO WIN!";
    resetGame();
  } else {
    let cells = document.querySelectorAll(".cell");
    let isDraw = true;
    cells.forEach((cell) => {
      if (cell.innerHTML === "") {
        isDraw = false;
        winner.innerHTML = "";
      }
    });

    if (isDraw) {
      resetGame();
      winner.innerHTML = "DRAW!";
    }
  }
}

function resetGame() {
  let cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.innerHTML = "";
    cell.setAttribute("onclick", "printXAnd0(this)");
  }
  currentTurn = "X"; // Reset the turn to "X"
}
