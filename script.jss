// Floating hearts on button click 💗
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // Popup message 💋
  alert("Mwah 💋 Welcome to our Vanilla Spice world!");

  // Create a floating heart
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  heart.style.fontSize = "2rem";
  heart.style.animation = "floatUp 4s linear forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
});

// Add glowing effect to heading ✨
const heading = document.querySelector("h1");
setInterval(() => {
  heading.style.textShadow =
    "0 0 10px #ff69b4, 0 0 20px #ff1493, 0 0 30px #ff69b4";
  setTimeout(() => {
    heading.style.textShadow = "none";
  }, 500);
}, 1500);
