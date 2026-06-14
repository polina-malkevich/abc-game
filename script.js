const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
let currentIndex = 0;
let currentLetter = "A";

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
  centrBlock;
  centrBlock.textContent = currentLetter;
  speakText(currentLetter);
});

const rightButton = document.getElementById("right");
rightButton.addEventListener("click", function () {
  console.log("rightButton");
  if (currentIndex === 33) {
    return;
  }

  currentIndex = currentIndex + 1;
  currentLetter = alphabet[currentIndex];
  centrBlock;
  centrBlock.textContent = currentLetter;

  speakText(currentLetter);
});

function speakText(text) {
  // Проверяем поддержку браузером
  if (!("speechSynthesis" in window)) {
    alert("Ваш браузер не поддерживает синтез речи.");
    return;
  }

  // Создаем объект с нужным текстом
  const utterance = new SpeechSynthesisUtterance(text);

  // Настройки воспроизведения
  utterance.rate = 1; // Скорость (от 0.1 до 10)
  utterance.pitch = 1; // Высота тона (от 0 до 2)
  utterance.volume = 1; // Громкость (от 0 до 1)

  // Получаем список доступных голосов
  const voices = window.speechSynthesis.getVoices();

  // Устанавливаем первый доступный русский голос (если есть)
  const russianVoice = voices.find((voice) => voice.lang.startsWith("ru"));
  if (russianVoice) {
    utterance.voice = russianVoice;
  }

  // Запуск речи
  window.speechSynthesis.cancel(); // Остановка предыдущего воспроизведения (если есть)
  window.speechSynthesis.speak(utterance);
}
