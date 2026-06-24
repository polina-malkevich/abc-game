const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
let currentIndex = 0;
let currentLetter = "А";
randerAlphabet();

const centrBlock = document.getElementById("center");
centrBlock.addEventListener("click", function () {
  console.log("centrButton");
  centrBlock.textContent = currentLetter;

  speakText(currentLetter);
});

const leftButton = document.getElementById("left");
leftButton.addEventListener("click", function () {
  console.log("leftButton");
  if (currentIndex === 0) {
    return;
  }
  currentIndex = currentIndex - 1;
  currentLetter = alphabet[currentIndex];
  centrBlock.textContent = currentLetter;
  speakText(currentLetter);
});

const rightButton = document.getElementById("right");
rightButton.addEventListener("click", function () {
  console.log("rightButton");
  if (currentIndex === 32) {
    return;
  }

  currentIndex = currentIndex + 1;
  currentLetter = alphabet[currentIndex];
  centrBlock.textContent = currentLetter;

  speakText(currentLetter);
});



function randerAlphabet() {
  console.log("randerAlphabet");
  let alphabetContainer = document.getElementById("alphabet-container");
  alphabet.forEach((letter, index)=>{
    const newElement = document.createElement("div");
    newElement.textContent = letter;
    newElement.classList.add("letter-box");
    
    alphabetContainer.append(newElement);
  })

}