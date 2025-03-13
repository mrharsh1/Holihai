"use client"
import { useState, useEffect } from 'react';

export default function ColorGuess() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple'];
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [timeLeft, setTimeLeft] = useState(7);
  const [level, setLevel] = useState(1);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      alert(`⏳ Time's up! Final Score: ${score}`);
      resetGame();
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const checkAnswer = (color) => {
    if (color === currentColor) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore % 5 === 0) {
        setLevel(level + 1);
      }
      nextRound();
    } else {
      alert(`❌ Wrong! It was ${currentColor}`);
      resetGame();
    }
  };

  const nextRound = () => {
    setCurrentColor(getRandomColor());
    setTimeLeft(7 - level * 0.5);
  };

  const resetGame = () => {
    setScore(0);
    setLevel(1);
    setTimeLeft(7);
    setCurrentColor(getRandomColor());
  };

  return (
    <div style={container}>
      <h1>🎯 Classic Color Guess</h1>
      <p>Score: {score} | Level: {level}</p>
      <p>⏳ Time Left: {timeLeft}s</p>
      <h2 style={{ color: currentColor }}>{currentColor.toUpperCase()}</h2>

      <div style={btnGrid}>
        {colors.map((color) => (
          <button key={color} onClick={() => checkAnswer(color)} style={{ ...btnStyle, backgroundColor: color }}>
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

const container = { textAlign: 'center', padding: '2rem', background: '#FF6F91' };
const btnGrid = { display: 'flex', justifyContent: 'center', gap: '10px' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', border: 'none', color: 'white' };
