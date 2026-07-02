const ruAlphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
const enAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let alphabet = ruAlphabet;
let currentLang = "ru";
let currentIndex = 0;
let currentLetter = "А";
const langBlock = document.getElementById("language");
const centrBlock = document.getElementById("center");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");
randerAlphabet();

centrBlock.addEventListener("click", function () {
  console.log("centrButton");
  speakText(currentLetter);
});

leftButton.addEventListener("click", function () {
  console.log("leftButton");
  if (currentIndex === 0) {
    return;
  }
  currentIndex = currentIndex - 1;
  currentLetter = alphabet[currentIndex];
  centrBlock.textContent = currentLetter;
  randerAlphabet();
  speakText(currentLetter);
});

rightButton.addEventListener("click", function () {
  console.log("rightButton");
  if (currentIndex === 32) {
    return;
  }
  currentIndex = currentIndex + 1;
  currentLetter = alphabet[currentIndex];
  centrBlock.textContent = currentLetter;
  randerAlphabet();
  speakText(currentLetter);
});

langBlock.addEventListener("click", function () {
  console.log("language");
  // обновіть значеніе alphabet и currentLang
  if (currentLang === "ru") {
    alphabet = enAlphabet;
    currentLang = "en";
  } else {
    alphabet = ruAlphabet;
    currentLang = "ru";
  }
  langBlock.textContent = currentLang;
 
  //и обновить currentIndex
  currentIndex = 0;

  //и обновить currentLetter
  currentLetter = alphabet[currentIndex];
  //і обновіть центральный блок
  centrBlock.textContent = currentLetter;
  randerAlphabet();
  speakText(currentLetter);
});

function randerAlphabet() {
  console.log("randerAlphabet");
  let alphabetContainer = document.getElementById("alphabet-container");
  alphabetContainer.replaceChildren();
  //
  alphabet.forEach((letter, index) => {
    const newElement = document.createElement("div");
    newElement.textContent = letter;

    if (index === currentIndex) {
      newElement.classList.add("selected-letter-box");
    } else {
      newElement.classList.add("letter-box");
    }

    newElement.addEventListener("click", (event) => {
      currentIndex = index;
      currentLetter = letter;
      centrBlock.textContent = currentLetter;
      randerAlphabet();
      speakText(currentLetter);
    });
    alphabetContainer.append(newElement);
  });
}
