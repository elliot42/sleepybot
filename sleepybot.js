function speak(text) {
  var msg = new SpeechSynthesisUtterance(text);
  msg.voice = window.speechSynthesis.getVoices()[50];
  window.speechSynthesis.speak(msg);
}
