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
