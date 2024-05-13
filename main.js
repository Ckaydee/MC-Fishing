// Functionize Minecraft Fishing Start Code
// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// HTML variables
var fishBtn = document.getElementById("fish-btn");
var img = document.getElementById("result-img");
var codEl = document.getElementById("num-cod");
var salmonEl = document.getElementById("num-salmon");
var tropicalEl = document.getElementById("num-tropical");
var pufferEl = document.getElementById("num-puffer");
var plus5btn = document.getElementById("plus5");
var until200btn = document.getElementById("until200");
var inputFishNumber = document.getElementById("inputFish");
var sortingFish = document.getElementById("sortFish");
var div = document.getElementById("fishInventory");

// Fish Button Event Listener
fishBtn.addEventListener("click", fishBtnClicked);
plus5btn.addEventListener("click", plus5);
until200btn.addEventListener("click", until200);
inputFishNumber.addEventListener("change", inputFish);
sortingFish.addEventListener("click", sortFish);

function fishBtnClicked() {
  // Determine selected character
  let character = document.getElementById("character-select").value;

  if (character == "steve") {
    let randNum = Math.random().toFixed(4);
    numCod = 0;
    numTropical = 0;
    numPuffer = 0;
    numSalmon = 0;
    div.innerHTML = "";
    console.log(randNum);
    if (randNum <= 0.7) {
      img.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
      div.innerHTML += `<img src="img/Raw-Cod.png" width="20px" />`;
    } else if (randNum <= 0.9) {
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
      div.innerHTML += ` <img src="img/Raw-Salmon.png" width="20px" />`;
    } else if (randNum <= 0.95) {
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
      div.innerHTML += `<img src="img/Tropical-Fish.png" width="20px" />`;
    } else {
      img.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
      div.innerHTML += ` <img src="img/Pufferfish.png" width="20px" />`;
    }
  } else if (character == "alex") {
    let randNum = Math.random().toFixed(4);
    numCod = 0;
    numTropical = 0;
    numPuffer = 0;
    numSalmon = 0;
    div.innerHTML = "";
    console.log(randNum);
    if (randNum <= 0.1) {
      img.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
      div.innerHTML += `<img src="img/Raw-Cod.png" width="20px" />`;
    } else if (randNum <= 0.2) {
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
      div.innerHTML += ` <img src="img/Raw-Salmon.png" width="20px" />`;
    } else if (randNum <= 0.5) {
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
      div.innerHTML += `<img src="img/Tropical-Fish.png" width="20px" />`;
    } else {
      img.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
      div.innerHTML += ` <img src="img/Pufferfish.png" width="20px" />`;
    }
  } else if (character == "villager") {
    let randNum = Math.random().toFixed(4);
    numCod = 0;
    numTropical = 0;
    numPuffer = 0;
    numSalmon = 0;
    div.innerHTML = "";
    console.log(randNum);
    if (randNum <= 0.25) {
      img.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
      div.innerHTML += `<img src="img/Raw-Cod.png" width="20px" />`;
    } else if (randNum <= 0.5) {
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
      div.innerHTML += ` <img src="img/Raw-Salmon.png" width="20px" />`;
    } else if (randNum <= 0.75) {
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
      div.innerHTML += `<img src="img/Tropical-Fish.png" width="20px" />`;
    } else {
      img.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
      div.innerHTML += ` <img src="img/Pufferfish.png" width="20px" />`;
    }
  }
}
function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}
function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
}
function sortFish() {
  div.innerHTML = "";
  var sortingCod = 0;
  console.log(numCod);

  while (sortingCod < numCod) {
    div.innerHTML += `<img src="img/Raw-Cod.png" width="20px" />`;
    sortingCod++;
    console.log(sortingCod);
  }
  var sortingSalmon = 0;
  while (sortingSalmon < numSalmon) {
    div.innerHTML += ` <img src="img/Raw-Salmon.png" width="20px" />`;
    sortingSalmon++;
  }
  var sortingTropical = 0;
  while (sortingTropical < numTropical) {
    div.innerHTML += `<img src="img/Tropical-Fish.png" width="20px" />`;
    sortingTropical++;
  }
  var sortingPuffer = 0;
  while (sortingPuffer < numPuffer) {
    div.innerHTML += ` <img src="img/Pufferfish.png" width="20px" />`;
    sortingPuffer++;
  }
}
