import confetti from 'canvas-confetti';

export function celebrate(count = 100) {
  try {
    confetti({
      particleCount: count,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#b8860b', '#900C3F', '#FF5733', '#FFC300', '#ffffff', '#e06666'],
    });
  } catch (e) {
    // fallback
  }
}
