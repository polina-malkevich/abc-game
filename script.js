const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
let currentIndex = 0;
let currentLetter = "А";

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


function getRussianAlphabet(caseType = 'lower') {
    let alphabet = [];
    
    // Коды Unicode для русского алфавита
    const start = (caseType === 'upper') ? 1040 : 1072; // А или а
    const end = (caseType === 'upper') ? 1071 : 1103;   // Я или я
    const yo = (caseType === 'upper') ? 'Ё' : 'ё';       // Буква Ё
    
    for (let i = start; i <= end; i++) {
        let letter = String.fromCharCode(i);
        alphabet.push(letter);
        
        // Вставляем букву "Ё" после Е
        if (letter.toLowerCase() === 'е') {
            alphabet.push(yo);
        }
    }
    
    return alphabet.join(' ');
}

