const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Student", "Web Developer", "Competitive Programmer", "Technophile"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



const typedTextSpan1 = document.querySelectorAll(".typed-text")[1];
const cursorSpan1 = document.querySelectorAll(".cursor")[1];
console.log(typedTextSpan1);

const textArray1 = ["Student", "Web Developer", "Competitive Programmer", "Technophile"];
const typingDelay1 = 200;
const erasingDelay1 = 100;
const newTextDelay1= 1000; // Delay between current and next text
let textArrayIndex1 = 0;
let charIndex1 = 0;

function type1() {
  if (charIndex1 < textArray1[textArrayIndex1].length) {
    if(!cursorSpan1.classList.contains("typing")) cursorSpan1.classList.add("typing");
    typedTextSpan1.textContent += textArray[textArrayIndex1].charAt(charIndex1);
    charIndex1++;
    setTimeout(type1, typingDelay1);
  } 
  else {
    cursorSpan1.classList.remove("typing");
    setTimeout(erase1, newTextDelay1);
  }
}

function erase1() {
  if (charIndex1 > 0) {
    if(!cursorSpan1.classList.contains("typing")) cursorSpan1.classList.add("typing");
    typedTextSpan1.textContent = textArray[textArrayIndex1].substring(0, charIndex-1);
    charIndex1--;
    setTimeout(erase1, erasingDelay1);
  } 
  else {
    cursorSpan1.classList.remove("typing");
    textArrayIndex1++;
    if(textArrayIndex1>=textArray.length) textArrayIndex1=0;
    setTimeout(type1, typingDelay1 + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type1,newTextDelay1 + 250);
});

// var typed = new Typed(".typing", {
//   strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true
// });
// var typed = new Typed(".typing-2", {
//   strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true
// });