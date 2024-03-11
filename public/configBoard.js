let cells = {};
let cellCount = 1;
let playerCount = 1;
let playerObject = {};
let casella = 0;

const onClick = (e) => {
  playerObject["player-" + playerCount] = { x: e.clientX, y: e.clientY };
  playerCount++;
  if (playerCount > 4) {
    cells["cell-" + cellCount] = playerObject;
    cellCount++;
    playerCount = 1;
    playerObject = {};
  }
  renderMessage();
  casella++;

  let coord = DuckCoords["cell-" + 21]["player-1"];
  const player1 = document.getElementById("player1");
  player1.style.position = "absolute";
  player1.style.left = coord.x + "px";
  player1.style.top = coord.y + "px";
  player1.style.width = "40px";

  coord = DuckCoords["cell-" + 4]["player-2"];
  const player2 = document.getElementById("player2");
  player2.style.position = "absolute";
  player2.style.left = coord.x + "px";
  player2.style.top = coord.y + "px";
  player2.style.width = "40px";

  coord = DuckCoords["cell-" + 3]["player-3"];
  const player3 = document.getElementById("player3");
  player3.style.position = "absolute";
  player3.style.left = coord.x + "px";
  player3.style.top = coord.y + "px";
  player3.style.width = "40px";

  coord = DuckCoords["cell-" + 1]["player-4"];
  const player4 = document.getElementById("player4");
  player4.style.position = "absolute";
  player4.style.left = coord.x + "px";
  player4.style.top = coord.y + "px";
  player4.style.width = "40px";
};

const renderMessage = () => {
  let msg =
    "Clicca nel centro della cella numero " +
    cellCount +
    " per il giocatore " +
    playerCount;
  const msdDiv = document.getElementById("msg");
  msdDiv.innerHTML = msg;
  console.log(cells);
};

window.addEventListener("click", onClick);
renderMessage();

let cellCoordinates = {};
