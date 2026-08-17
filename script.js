const ruAlphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
const enAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const bagrounds = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"];
let alphabet = ruAlphabet;
let bgIndex = 0;
let currentLang = "ru";
let currentIndex = 0;
let currentLetter = "А";
const langBlock = document.getElementById("language");
const centrBlock = document.getElementById("center");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");
const body = document.getElementById("body");
const bagroundButton = document.getElementById("baground");
const musicButton = document.getElementById("music-button");
const music = document.getElementById("bg-music");
randerAlphabet();

centrBlock.addEventListener("click", function () {
  console.log("centrButton");
  speakText(currentLetter);
});

musicButton.addEventListener("click", function () {
  console.log("music");
  music.volume = 0.1;

  if (music.paused) {
    music.play();
    musicButton.textContent = "pause";
  } else {
    music.pause();
    musicButton.textContent = "play";
  }
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
  if ((currentLang === "ru" && currentIndex === 32)) {
    return;
  }
  if ((currentLang === "en" && currentIndex === 25)) {
    return;
  }
  currentIndex = currentIndex + 1;
  currentLetter = alphabet[currentIndex];
  centrBlock.textContent = currentLetter;
  randerAlphabet();
  speakText(currentLetter);
});

bagroundButton.addEventListener("click", function () {
  console.log("bagroundButton");

  body.style.backgroundImage = `url(${bagrounds[bgIndex]})`;
  bgIndex = bgIndex + 1;

  if (bgIndex > bagrounds.length - 1) {
    bgIndex = 0;
  }
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
