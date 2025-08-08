// Select elements
const button = document.getElementById('theriButton');
const lights = document.querySelector('.lights');
const wind = document.querySelector('.wind');

// Preload some audio files (Tamil punch dialogues)
const dialogues = [
  'audio/dialogue1.mp3', // replace with your audio file paths
  'audio/dialogue2.mp3',
  'audio/dialogue3.mp3'
];

// Function to play random dialogue
function playRandomDialogue() {
  const audio = new Audio(dialogues[Math.floor(Math.random() * dialogues.length)]);
  audio.play();
}

// Function to flash lights
function flashLights() {
  lights.style.display = 'block';
  lights.classList.add('flash');
  setTimeout(() => {
    lights.classList.remove('flash');
    lights.style.display = 'none';
  }, 2000);
}

// Function to show wind animation
function blowWind() {
  wind.style.display = 'block';
  wind.classList.add('blow');
  setTimeout(() => {
    wind.classList.remove('blow');
    wind.style.display = 'none';
  }, 2000);
}

// Function to get user's frustration text
function getUserText() {
  const userText = prompt("Type what you want to shout! 😡");
  if (userText) {
    const blastText = document.createElement('div');
    blastText.innerText = userText;
    blastText.className = 'blast';
    document.body.appendChild(blastText);
    setTimeout(() => blastText.remove(), 3000);
  }
}

// Main button click event
button.addEventListener('click', () => {
  getUserText();
  playRandomDialogue();
  flashLights();
  blowWind();
});
