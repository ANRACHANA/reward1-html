const giftBox = document.getElementById("gift-box");
const countdown = document.getElementById("countdown");
const rewardImage = document.getElementById("reward-image");
const winnerText = document.getElementById("winner-text");

const rewards = [
  { name: "iPhone", img: "rewards/iphone.jpg" },
  { name: "ម៉ូតូ", img: "rewards/moto.jpg" },
  { name: "ឡាន", img: "rewards/car.jpg " },
  { name: "លុយ", img: "rewards/money.jpg" }
];

function launchFireworks() {
  const duration = 5000;
  const animationEnd = Date.now() + duration;
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    confetti({
      particleCount: 50,
      spread: 360,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
  }, 300);
}

giftBox.addEventListener("click", () => {
  giftBox.style.pointerEvents = "none";
  giftBox.classList.add("glow");
  let timeLeft = 20;
  countdown.textContent = `⏳ សូមរង់ចាំ ${timeLeft} វិនាទី...`;

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = `⏳ សូមរង់ចាំ ${timeLeft} វិនាទី...`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      countdown.textContent = "";
      giftBox.style.display = "none";

      const selected = rewards[Math.floor(Math.random() * rewards.length)];
      rewardImage.src = selected.img;
      rewardImage.style.display = "block";
      winnerText.textContent = `🎉 អ្នកឈ្នះរង្វាន់: ${selected.name}!`;
      winnerText.style.display = "block";

      launchFireworks();
    }
  }, 1000);
});
