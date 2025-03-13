"use client"
import { useState } from 'react';

export default function ColorMath() {
  const colors = { red: 1, green: 2, blue: 3, yellow: 4 };
  const [num1, setNum1] = useState(getRandomNum());
  const [num2, setNum2] = useState(getRandomNum());
  const [score, setScore] = useState(0);

  function getRandomNum() {
    return Math.floor(Math.random() * 4) + 1;
  }

  const checkAnswer = (color) => {
    const correctSum = num1 + num2;
    if (colors[color] === correctSum) {
      setScore(score + 1);
      nextRound();
    } else {
      alert(`❌ Wrong! It was ${correctSum}`);
      setScore(0);
    }
  };

  const nextRound = () => {
    setNum1(getRandomNum());
    setNum2(getRandomNum());
  };

  return (
    <div style={container}>
      <h1>➕ Color Math Challenge!</h1>
      <p>{num1} + {num2} = ?</p>
      <p>Score: {score}</p>

      {Object.keys(colors).map((color) => (
        <button key={color} onClick={() => checkAnswer(color)} style={{ ...btnStyle, backgroundColor: color }}>
          {color}
        </button>
      ))}
    </div>
  );
}

const container = { textAlign: 'center', padding: '2rem', background: '#90EE90' };
const btnStyle = { margin: '10px', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' };
