export const speak = (text: string, voice: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices.find(v => v.lang === voice);
  
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  
  utterance.pitch = 1.2; // Slightly higher pitch for female voice
  utterance.rate = 1.0;
  
  window.speechSynthesis.speak(utterance);
};