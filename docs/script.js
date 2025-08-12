// コンフェッティアニメーション
function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti-piece';
  const size = Math.random() * 8 + 8;
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size * 0.4}px`;
  confetti.style.background = `hsl(${Math.random()*360}, 80%, 70%)`;
  confetti.style.position = 'absolute';
  confetti.style.top = '-20px';
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.opacity = Math.random() * 0.5 + 0.5;
  confetti.style.borderRadius = '4px';
  confetti.style.transform = `rotate(${Math.random()*360}deg)`;
  confetti.style.transition = 'transform 0.3s';
  return confetti;
}

function launchConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti';
  document.body.appendChild(confettiContainer);
  for (let i = 0; i < 40; i++) {
    const confetti = createConfettiPiece();
    confettiContainer.appendChild(confetti);
    setTimeout(() => {
      confetti.style.transition = 'top 1.6s cubic-bezier(.39,.575,.565,1), left 1.6s cubic-bezier(.39,.575,.565,1), transform 1.6s';
      confetti.style.top = `${80 + Math.random() * 20}vh`;
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.transform = `rotate(${Math.random()*720}deg)`;
    }, 10);
  }
  setTimeout(() => {
    confettiContainer.remove();
  }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    showToast('こんにちは！');
    launchConfetti();
  });

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
});
