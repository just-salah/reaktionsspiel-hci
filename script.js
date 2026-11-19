const startBtn = document.getElementById("startBtn");
const target = document.getElementById("target");
const arena = document.getElementById("arena");
const info = document.getElementById("info");
let startTime = 0;

startBtn.addEventListener("click", startRound);
target.addEventListener("click", hitTarget);

function startRound() {
  target.style.display = "none";
  info.textContent = "Warte...";
  const delay = 1000 + Math.random() * 2000;   // 1 bis 3 Sekunden
  setTimeout(showTarget, delay);
}

function showTarget() {
  const size = 60;
  target.style.width = size + "px";
  target.style.height = size + "px";
  target.style.left = Math.random() * (arena.clientWidth - size) + "px";
  target.style.top = Math.random() * (arena.clientHeight - size) + "px";
  target.style.display = "block";
  startTime = performance.now();
}

function hitTarget() {
  const reactionTime = Math.round(performance.now() - startTime);
  target.style.display = "none";
  info.textContent = "Reaktionszeit: " + reactionTime + " ms";
}