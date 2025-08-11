// Typewriter effect introduction
const introLines = [
  "Well, hi there! I’m Jona May E. Babad, but you can just call me Jona — most of my ",
  "friends call me “Jo.” I just turned 18 last month! I grew up in Llano, Caloocan City, but ",
  "my roots are from Leyte and Bohol. I’m a first-year Civil Engineering student at the ",
  "University of Santo Tomas (UST). See you around the halls of Ruano!",
];
let lineIndex = 0, charIndex = 0;
const typewriterElem = document.querySelector('.typewriter');
function typeLine() {
  if (lineIndex < introLines.length) {
    if (charIndex < introLines[lineIndex].length) {
      typewriterElem.textContent += introLines[lineIndex][charIndex++];
      setTimeout(typeLine, 40);
    } else {
      typewriterElem.innerHTML += '<br>';
      lineIndex++; charIndex = 0;
      setTimeout(typeLine, 700);
    }
  }
}
typeLine();

// Fun facts
const funFacts = [
  "I have the same birthday as Dr. Jose Rizal (June 19!)",
  "I was two weeks early — I was supposedly due in July",
  "A not-so-fun fact is that I fell down our stairs when I was around 2 or 3 years old, and my parents had to go home just to rush me to the hospital. They even waited 12 hours just to get me checked",
  "I don't like super spicy foods",
];
document.getElementById('random-fact-btn').addEventListener('click', () => {
  const idx = Math.floor(Math.random() * funFacts.length);
  document.getElementById('random-fact').textContent = funFacts[idx];
});

// Hobbies carousel
const hobbies = [
  { icon: "📚", text: "I love reading books!" },
  { icon: "📖", text: "I love reading webtoons/manhwa" },
  { icon: "📺", text: "When I'm bored I watch anime, horror movies, live streams and youtube contents" },
  { icon: "🎨", text: "I like to draw random stuff" },
  { icon: "🍫", text: "I love dark chocolate"},
  { icon: "😁", text: "may crush sa Electrical Engineering Department"},
];
let hobbyIndex = 0;
function renderHobbies() {
  const carousel = document.getElementById('hobbies-carousel');
  carousel.innerHTML = '';
  // Left arrow
  const leftArrow = document.createElement('button');
  leftArrow.className = 'hobby-arrow';
  leftArrow.innerHTML = '⟵';
  leftArrow.onclick = () => { hobbyIndex = (hobbyIndex - 1 + hobbies.length) % hobbies.length; renderHobbies(); };
  carousel.appendChild(leftArrow);
  // Show 3 hobbies: previous, current, next
  for (let i = -1; i <= 1; i++) {
    let idx = (hobbyIndex + i + hobbies.length) % hobbies.length;
    const hobby = hobbies[idx];
    const card = document.createElement('div');
    card.className = 'hobby-card' + (i === 0 ? ' active' : '');
    card.innerHTML = `<span style="font-size:2em">${hobby.icon}</span><br>${hobby.text}`;
    carousel.appendChild(card);
  }
  // Right arrow
  const rightArrow = document.createElement('button');
  rightArrow.className = 'hobby-arrow';
  rightArrow.innerHTML = '⟶';
  rightArrow.onclick = () => { hobbyIndex = (hobbyIndex + 1) % hobbies.length; renderHobbies(); };
  carousel.appendChild(rightArrow);
}
renderHobbies();

// Animated star background
function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.position = 'absolute';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
  star.style.background = '#fff8';
  star.style.borderRadius = '50%';
  star.style.opacity = Math.random();
  star.style.boxShadow = `0 0 6px #fff9`;
  document.querySelector('.star-bg').appendChild(star);
}
for (let i = 0; i < 80; i++) createStar();
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const showPictureBtn = document.getElementById('show-picture-btn');
    const pictureContainer = document.getElementById('picture-container');
    
    showPictureBtn.addEventListener('click', function() {
        pictureContainer.classList.toggle('hidden');
        showPictureBtn.textContent = pictureContainer.classList.contains('hidden') ? 
            'Show Picture' : 'Hide Picture';
    });
});