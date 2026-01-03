// Typing the name
const nameText = "Priyanka Behera";
const nameElement = document.getElementById("name");
let nameIndex = 0;

function typeName() {
  if (nameIndex < nameText.length) {
    nameElement.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 150);
  }
}
typeName();

// Timed messages
setTimeout(() => {
  document.getElementById("greeting").textContent = "Welcome to my world!";
  document.getElementById("greeting").style.opacity = 1;
}, nameText.length * 150 + 300);

setTimeout(() => {
  document.getElementById("quote1").textContent = "You alone are enough. You have nothing to prove to anyone.";
  document.getElementById("quote1").style.opacity = 1;
}, nameText.length * 150 + 2000);

setTimeout(() => {
  document.getElementById("quote2").textContent = "Fall in love with taking care of yourself: mind, body, and soul.";
  document.getElementById("quote2").style.opacity = 1;
}, nameText.length * 150 + 4000);

// Typing final message
const finalText = "Keep loving yourself 💖";
let finalIndex = 0;

function typeFinalMessage() {
  if (finalIndex < finalText.length) {
    document.getElementById("finalMessage").textContent += finalText.charAt(finalIndex);
    finalIndex++;
    setTimeout(typeFinalMessage, 120);
  }
}

setTimeout(() => {
  document.getElementById("finalMessage").style.opacity = 1;
  typeFinalMessage();
}, nameText.length * 150 + 6000);

// Show smiley with glow
setTimeout(() => {
  document.getElementById("smiley").style.opacity = 1;
}, nameText.length * 150 + 8500);

// 🌟 Particle Animation
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particlesArray = [];

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 2 + 1;
  this.speedX = (Math.random() - 0.5) * 1;
  this.speedY = (Math.random() - 0.5) * 1;
  this.color = "rgba(255, 255, 255, 0.8)";

  this.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  };

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = "white";
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;
  };
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 150; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();


