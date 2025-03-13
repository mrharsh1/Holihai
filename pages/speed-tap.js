"use client"
import { useState, useEffect } from 'react';

export default function SpeedTap() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    if (timeLeft === 0) {
      alert(`⏳ Time Over! Final Score: ${score}`);
      resetGame();
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleTap = (color) => {
    if (color === currentColor) {
      setScore(score + 1);
      setCurrentColor(getRandomColor());
    } else {
      alert(`❌ Wrong! It was ${currentColor}`);
      resetGame();
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(10);
    setCurrentColor(getRandomColor());
  };

  return (
    <div style={container}>
      <h1>⚡ Speed Color Tap!</h1>
      <p>Score: {score} | Time: {timeLeft}s</p>
      <h2 style={{ color: currentColor }}>{currentColor.toUpperCase()}</h2>

      {colors.map((color) => (
        <button key={color} onClick={() => handleTap(color)} style={{ ...btnStyle, backgroundColor: color }}>
          {color}
        </button>
      ))}
    </div>
  );
}

const container = { textAlign: 'center', padding: '2rem', background: '#FFD700' };
const btnStyle = { margin: '10px', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' };
