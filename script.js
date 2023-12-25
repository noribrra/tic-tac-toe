let griditem = document.getElementsByClassName("square");
let curentturn = "X";
let gamefinesh = false;
let arrayborder = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

for (let item of griditem) {
  let value = item.getAttribute("value");
  let index = value - 1;
  let squarecontent = document.querySelector(`.square[value="${value}"]`);

  item.addEventListener("click", () => {
    if (gamefinesh) {
      return;
    }

    if (arrayborder[index] == "X" || arrayborder[index] == "O") {
      return;
    }

    squarecontent.innerHTML = `<h3 class="square-content animate__animated animate__pulse ">${curentturn}</h3>`;
    arrayborder[index] = curentturn;

    curentturn === "X" ? (curentturn = "O") : (curentturn = "X");
    document.getElementById("ist").innerHTML = `${curentturn} turn`;
    setTimeout(() => {
      winer();
    }, 50);
  });

  function winer() {
    if (
      (arrayborder[0] == arrayborder[1] && arrayborder[1] == arrayborder[2]) ||
      (arrayborder[0] == arrayborder[3] && arrayborder[3] == arrayborder[6]) ||
      (arrayborder[0] == arrayborder[4] && arrayborder[4] == arrayborder[8]) ||
      (arrayborder[1] == arrayborder[4] && arrayborder[4] == arrayborder[7]) ||
      (arrayborder[2] == arrayborder[4] && arrayborder[4] == arrayborder[6]) ||
      (arrayborder[2] == arrayborder[5] && arrayborder[5] == arrayborder[8]) ||
      (arrayborder[3] == arrayborder[4] && arrayborder[4] == arrayborder[5]) ||
      (arrayborder[6] == arrayborder[7] && arrayborder[7] == arrayborder[8])
    ) {
      let winerr = curentturn == "O" ? "X" : "O";
      gamefinesh = true;

      alertify.alert("", winerr + "   Won!");
    }

    let isdrow = true;
    for (square of arrayborder) {
      if (square != "X" && square != "O") {
        isdrow = false;
      }
    }

    if (isdrow && !gamefinesh) {
      gamefinesh = true;

      alertify.alert("", "  is drow");
    }
  }
}
function clickreset() {
  arrayborder = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  for (let item of griditem) {
    let value = item.getAttribute("value");
    let squarecontent = document.querySelector(`.square[value="${value}"]`);
    squarecontent.innerHTML = "";
  }
  gamefinesh = false;
  curentturn = "X";
  document.getElementById("ist").innerHTML = `${curentturn} turn`;
}
