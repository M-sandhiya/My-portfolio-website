console.log("Portfolio loaded");

const roles = [
  "Front-end Developer",
  "Back-end Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetweenWords = 1500;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (index >= roles.length) index = 0;
  currentText = roles[index];

  if (!isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
      return;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }

  setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
