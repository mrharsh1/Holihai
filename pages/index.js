" use client"
import { useState } from 'react';

export default function Home() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const checkAnswer = (color) => {
    if (color === currentColor) {
      setScore(score + 1);
    } else {
      alert('Galat Jawab! Sahi rang tha: ' + currentColor);
      setScore(0);
    }
    setCurrentColor(getRandomColor());
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: '#FFDDC1' }}>
      <h1>🎨 Holihai – Color Game!</h1>
      <h2>Rang Pehchano Aur Jeeto!</h2>
      <p>Score: {score}</p>
      <div style={{ margin: '20px', fontSize: '20px' }}>
        <strong>Rang: </strong>
        <span style={{ color: currentColor }}>{currentColor}</span>
      </div>
      {colors.map((color) => (
        <button
          key={color}
          style={{ margin: '10px', padding: '10px 20px', backgroundColor: color }}
          onClick={() => checkAnswer(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
