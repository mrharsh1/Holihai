"use client"
import { useState } from 'react';

export default function Multiplayer() {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [player1Score, setP1Score] = useState(0);
  const [player2Score, setP2Score] = useState(0);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleGuess = (color, player) => {
    if (color === currentColor) {
      player === 1 ? setP1Score(player1Score + 1) : setP2Score(player2Score + 1);
      setCurrentColor(getRandomColor());
    }
  };

  return (
    <div style={container}>
      <h1>👥 Multiplayer Mode</h1>
      <p>Current Color: {currentColor}</p>
      <p>Player 1: {player1Score} | Player 2: {player2Score}</p>
      {colors.map((color) => (
        <button key={color} onClick={() => handleGuess(color, 1)}>{color} (P1)</button>
      ))}
      {colors.map((color) => (
        <button key={color} onClick={() => handleGuess(color, 2)}>{color} (P2)</button>
      ))}
    </div>
  );
}

const container = { textAlign: 'center', padding: '2rem', background: '#FFA07A' };
