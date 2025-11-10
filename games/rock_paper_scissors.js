function playAgain() {
  console.log();
  return confirm("Do you want to play again?") ? play() : "";
}

function generateMsg(result, botsMove) {
  const possibleMoves = ["rock", "paper", "scissors"];
  const winConditions = `02,10,21`;
  
  if (winConditions.includes(result)) {
    console.log(`oponents move was: ${possibleMoves.at(botsMove)}`);
    console.log("you won 🏆");
  } else {
    console.log(`oponents move was: ${possibleMoves.at(botsMove)}`);
    console.log("you lose 😹");
  }
  
  return playAgain();
}

function generateComputersMove() {
  return Math.floor(Math.random() * (3 - 1 + 1));
}

function checkResult(playerMoveString) {
  const possibleMoves = ["rock", "paper", "scissors"];
  const playerMove = possibleMoves.indexOf(playerMoveString);
  const botsMove = generateComputersMove();

  if (playerMove === botsMove) {
    console.log(`Draw! oponent also chose ${playerMoveString}`);
    return playAgain();
  }

  const result = "" + playerMove + botsMove;
  return generateMsg(result, botsMove);
}

function play() {
  console.log("1.rock 👊");
  console.log("2.paper 🖐️");
  console.log("3.scissors ✌️");
  console.log();
  const possibleMoves = ["rock", "paper", "scissors"];
  const playerMove = prompt("chose Your move :");

  if (possibleMoves.includes(playerMove)) {
    return checkResult(playerMove);
  } else {
    console.log("Invalid move!");
    return playAgain();
  }
}

console.log();
play();
