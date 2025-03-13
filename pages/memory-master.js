"use client"
import { useState } from 'react';

export default function MemoryMaster() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [score, setScore] = useState(0);

  const newRound = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence([...sequence, newColor]);
    setUserInput([]);
  };

  const checkAnswer = (color) => {
    const newInput = [...userInput, color];
    setUserInput(newInput);

    if (sequence[newInput.length - 1] !== color) {
      alert(`❌ Wrong! Final Score: ${score}`);
      resetGame();
    } else if (newInput.length === sequence.length) {
      setScore(score + 1);
      alert('✅ Correct! Next Round!');
      newRound();
    }
  };

  const resetGame = () => {
    setSequence([]);
    setUserInput([]);
    setScore(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: '#F08080' }}>
      <h1>🧠 Memory Master!</h1>
      <p>Score: {score}</p>
      <button onClick={newRound}>Start Game</button>
      <div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => checkAnswer(color)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              backgroundColor: color,
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
