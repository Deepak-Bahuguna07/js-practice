let index = 0;
let totalRuns = 0;
let totalBall = 0;
let wicket = 0;
let striker = ['', 0, 0];
let nonStriker = ['', 0, 0];
let baller = '';

function strikerChange() {
  const temp = striker;
  striker = nonStriker;
  nonStriker = temp;
}

function increaseRuns(toAdd) {
  totalRuns += toAdd;
}

function increaseBalls() {
  totalBall += 1;
}

function increaseRunsStrickers(toAdd) {
  striker[1] += toAdd;
}

function increaseBallsStrickers() {
  striker[2] += 1;
}

function increaseWicket() {
  wicket += 1;
}

function newBatsman() {
  striker[0] = prompt("new batsman:");
  striker[1] = 0;
  striker[2] = 0;
}

function newBaller() {
  baller = prompt("new baller:");
}

function newBall() {
  console.log();
  console.log(`[0 1 2 3 4 6]`);
  console.log(`[nb wb wicket]`);
  console.log();
  const runPossible = [0, 1, 2, 3, 4, 6];
  const otherPossibleThings = ['nb', 'wb'];
  let thisBall = prompt("what happened in this ball: ");

  if (thisBall === 'wicket') { // types of getting wicket
    increaseWicket();
    increaseBalls();
    increaseBallsStrickers();
    newBatsman();
    return thisBall;
  }

  if (otherPossibleThings.includes((thisBall))) {
    const run = prompt("runs: ");
    increaseRuns(parseInt(run) + 1);
    increaseRunsStrickers(parseInt(run));
    if (parseInt(run) % 2 !== 0) {
      strikerChange();
    }
    if (thisBall === 'nb') {
      increaseBallsStrickers();
    }
    thisBall = `${thisBall} + ${run}`;
    return thisBall;
  }

  if (runPossible.includes(parseInt(thisBall))) {
    increaseRuns(parseInt(thisBall));
    increaseRunsStrickers(parseInt(thisBall));
    increaseBalls();
    increaseBallsStrickers();

    if (parseInt(thisBall) % 2 !== 0) {
      strikerChange();
    }
    return thisBall;
  }

  console.log("enter valid action :");
  return newBall();
}

function chooseOpner() {
  let striker = prompt('striker name: ');
  let non_striker = prompt('non-striker name: ');
  let baller = prompt('bowler name: ');
  console.log();
  return [striker, non_striker, baller];
}

function display(team, totalRuns, wicket, currentOvers, striker, nonStriker, baller, thisOver, target) {
  console.log(`<---------------${team}--------------->`)
  if (index === 1) {
    console.log(`target: ${target}`);
  }
  console.log(`Score:${totalRuns}/${wicket}    ${currentOvers}`);
  console.log(`*${striker[0]}:${striker[1]}(${striker[2]})`);
  console.log(`${nonStriker[0]}:${nonStriker[1]}(${nonStriker[2]})`);
  console.log();
  console.log(`${baller}:${thisOver}`);
}

function match(team, overs, totalPlayers = 11, scoreToMake = 999) {
  let players = chooseOpner();
  striker = [players[0], 0, 0];
  nonStriker = [players[1], 0, 0];
  baller = players[2];
  let currentOvers = 0;

  while (currentOvers < overs && wicket < totalPlayers - 1 && totalRuns < scoreToMake) {
    const thisOver = [];

    while (totalBall < 6 && wicket < totalPlayers - 1 && totalRuns < scoreToMake) {
      console.clear();
      display(team, totalRuns, wicket, currentOvers, striker, nonStriker, baller, thisOver, scoreToMake);
      thisOver.push(newBall());
    }

    console.clear();
    display(team, totalRuns, wicket, currentOvers, striker, nonStriker, baller, thisOver, scoreToMake);
    totalBall = 0;
    currentOvers += 1;
    if (currentOvers < overs && totalBall < 6 && wicket < totalPlayers - 1 && totalRuns < scoreToMake) {
      newBaller();
      strikerChange();
    }
  }
}

function flipCoin() {
  return Math.floor(Math.random() * (2 - 1 + 1));
}

function toss(team1, team2) {
  const possibleChoices = ["head", "tail"];
  console.log(`<---------------Toss--------------->`);
  console.log("1.head");
  console.log("2.tail");
  const teamCall = prompt(`${team1} call for toss: `);

  if (possibleChoices[flipCoin()] === teamCall) {
    console.log(`${team1} Won the toss.`);
    return team1;
  } else {
    console.log(`${team2} Won the toss.`);
    return team2;
  }
}

function firstInning(team1, team2) {
  const tossWonBy = toss(team1, team2);
  console.log();
  console.log(`<----------Select Innings---------->`);
  console.log("1.bat");
  console.log("2.ball");

  if (tossWonBy === team1) {
    if (prompt(`${team1} what you want to choose: `) === "bat") {
      console.log(`${team1} will bat first.`);
      return [team1, team2];
    } else {
      console.log(`${team1} will ball first.`);
      return [team2, team1];
    }
  } else {
    if (prompt(`${team2} what you want to choose: `) === "bat") {
      console.log(`${team2} will bat first.`);
      return [team2, team1];
    } else {
      console.log(`${team2} will ball first.`);
      return [team1, team2];
    }
  }
}

function selectTeam() {
  console.log();
  console.log(`<------------Select Team------------>`);
  const team1 = prompt("first team Name: ");
  const team2 = prompt("second team Name: ");
  let overs = prompt("overs: ");
  if (typeof parseInt(overs) !== 'number' || parseInt(overs) < 1) { //validate
    overs = prompt("enter valid over count.");
  }
  const players = prompt("players: ");
  console.log();
  const innings = firstInning(team1, team2);

  return [innings, overs, players];
}

function main() {
  const inningsData = selectTeam();
  console.log("\n");
  match(inningsData[0][index], inningsData[1], inningsData[2]);
  const firstInningScore = totalRuns;
  if (index === 0) {
    console.clear();
    console.log("first inning finished..");
    console.log(`${inningsData[0][1]} need ${firstInningScore} in ${inningsData[1]} over.`);
    index += 1;
    totalRuns = 0;
    wicket = 0;
    console.log();
    match(inningsData[0][index], inningsData[1], inningsData[2], firstInningScore);
  }
  if (index === 1) {
    console.clear();
    console.log("second inning finished");
    if (totalRuns > firstInningScore) {
      console.log(`${inningsData[0][index]} won by ${inningsData[2] - wicket - 1} wickets.`)
    }

    if (totalRuns < firstInningScore) {
      console.log(`${inningsData[0][0]} won by ${firstInningScore - totalRuns} runs.`)
    }
  }
}

main(); 