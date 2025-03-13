"use client"
import { useState, useEffect } from 'react';

export default function ColorGuess() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple'];
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [timeLeft, setTimeLeft] = useState(5);
  const [level, setLevel] = useState(1);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft <= 0) {
      alert('⏳ Time Over! Final Score: ' + score);
      resetGame();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const checkAnswer = (color) => {
    if (color === currentColor) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore % 5 === 0) {
        setLevel((prev) => prev + 1);
        alert('🚀 Level Up! Speed Increased!');
      }
      nextRound();
    } else {
      alert('❌ Wrong! The correct color was: ' + currentColor);
      resetGame();
    }
  };

  const nextRound = () => {
    setCurrentColor(getRandomColor());
    setTimeLeft(5 - level * 0.5);
  };

  const resetGame = () => {
    setScore(0);
    setLevel(1);
    setTimeLeft(5);
    setCurrentColor(getRandomColor());
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: '#ADD8E6' }}>
      <h1>🎯 Color Guess Challenge!</h1>
      <p>Score: {score} | Level: {level}</p>
      <p>⏳ Time Left: {timeLeft} sec</p>
      <h2 style={{ color: currentColor }}>{currentColor.toUpperCase()}</h2>

      {colors.map((color) => (
        <button
          key={color}
          onClick={() => checkAnswer(color)}
          style={{
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: color,
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
