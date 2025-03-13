"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple'];
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [fakeColor, setFakeColor] = useState('');
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameOver, setGameOver] = useState(false);

  // Random color generator
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Generate fake color to confuse
  function getFakeColor(realColor) {
    let newColor = realColor;
    while (newColor === realColor) {
      newColor = getRandomColor();
    }
    return newColor;
  }

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      alert('⏰ Samay Samapt! Aapka Score: ' + score);
      resetGame();
    }
  }, [timeLeft]);

  // Check user's answer
  const checkAnswer = (color) => {
    if (color === currentColor) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore % 5 === 0) {
        alert('🎉 Level Up! Ab speed aur tez hai!');
      }
      nextRound();
    } else {
      alert('❌ Galat Jawab! Sahi rang tha: ' + currentColor);
      resetGame();
    }
  };

  // Start next round
  const nextRound = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
    setFakeColor(Math.random() > 0.5 ? getFakeColor(newColor) : newColor);
    setTimeLeft(5); // Reset timer
  };

  // Reset game
  const resetGame = () => {
    setScore(0);
    setTimeLeft(5);
    setGameOver(true);
    setTimeout(() => setGameOver(false), 1000);
    nextRound();
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: '#FFDDC1' }}>
      <h1>🎨 Holihai – Ultimate Color Game!</h1>
      <h2>Rang Pehchano Aur Jeeto!</h2>
      <p>🏆 Score: {score}</p>
      <p>⏳ Time Left: {timeLeft} sec</p>

      <div
        style={{
          margin: '20px',
          fontSize: '30px',
          fontWeight: 'bold',
          color: currentColor,
          animation: gameOver ? 'shake 0.5s' : 'none',
        }}
      >
        {fakeColor.toUpperCase()}
      </div>

      {colors.map((color) => (
        <button
          key={color}
          style={{
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: color,
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => checkAnswer(color)}
        >
          {color}
        </button>
      ))}

      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
