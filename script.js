const tipText = document.getElementById('tipText');
const tipButton = document.getElementById('tipButton');

const tips = [
  'Take slow, deep breaths for 1 minute to reset your focus.',
  'Stand up and stretch your shoulders every hour to ease tension.',
  'Add a short walk after meals to support digestion and energy.',
  'Keep a water bottle nearby to make hydration part of your routine.'
];

let currentIndex = 0;

tipButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % tips.length;
  tipText.textContent = tips[currentIndex];
});
