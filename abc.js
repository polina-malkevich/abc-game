const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
let currentIndex = 0;
const centrBlock = document.getElementById("center");

const leftButton = document.getElementById("left");
leftButton.addEventListener("click", function () {
  console.log("leftButton");
  if (currentIndex === 0) {
    return;
  }
  currentIndex = currentIndex - 1;
  let currentLetter = alphabet[currentIndex];
  centrBlock;
  centrBlock.textContent = currentLetter;
});

const rightButton = document.getElementById("right");
rightButton.addEventListener("click", function () {
  console.log("rightButton");
  if (currentIndex === 33) {
    return;
  }

  currentIndex = currentIndex + 1;
  let currentLetter = alphabet[currentIndex];
  centrBlock;
  centrBlock.textContent = currentLetter;
});
