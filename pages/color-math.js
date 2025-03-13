"use client"
import { useState, useEffect } from 'react';

export default function ColorMath() {
  const colors = { red: 1, green: 2, blue: 3, yellow: 4, purple: 5, orange: 6 };
  const colorKeys = Object.keys(colors);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [level, setLevel] = useState(1);
  const [feedback, setFeedback] = useState('');

  // Generate random numbers and operation
  const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;
  const getRandomOperation = () => (Math.random() > 0.5 ? '+' : '-');

  // Start new round
  const newRound = () => {
    const maxNum = 5 + level; // Increase difficulty with levels
    setNum1(getRandomNumber(maxNum));
    setNum2(getRandomNumber(maxNum));
    setOperation(getRandomOperation());
    setTimeLeft(10);
    setFeedback('');
  };

  useEffect(() => {
    newRound();
  }, [level]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      alert(`⏳ Time's up! Final Score: ${score}`);
      resetGame();
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Calculate correct answer
  const correctAnswer = operation === '+' ? num1 + num2 : num1 - num2;

  // Handle user guess
  const checkAnswer = (color) => {
    if (colors[color] === correctAnswer) {
      setFeedback('✔️ Correct!');
      setScore(score + 1 + Math.floor(timeLeft / 2)); // Bonus for fast answers
      if ((score + 1) % 5 === 0) {
        setLevel(level + 1); // Level up after every 5 correct answers
      }
      newRound();
    } else {
      setFeedback('❌ Wrong!');
      setTimeLeft(timeLeft - 2); // Penalize for wrong answer
    }
  };

  // Reset game
  const resetGame = () => {
    setScore(0);
    setLevel(1);
    setTimeLeft(10);
    newRound();
  };

  return (
    <div style={container}>
      <h1>➕ Color Math Challenge!</h1>
      <p style={info}>Solve: {num1} {operation} {num2} = ?</p>
      <p style={info}>⏳ Time Left: {timeLeft}s | 🎯 Score: {score} | 🚀 Level: {level}</p>

      <p style={feedbackStyle}>{feedback}</p>

      <div style={buttonGrid}>
        {colorKeys.map((color) => (
          <button
            key={color}
            onClick={() => checkAnswer(color)}
            style={{ ...buttonStyle, backgroundColor: color }}
          >
            {color.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

const container = {
  textAlign: 'center',
  padding: '2rem',
  background: 'linear-gradient(135deg, #FDE74C, #9CEC5B)',
  minHeight: '100vh',
};

const info = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const buttonGrid = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  flexWrap: 'wrap',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '15px 30px',
  borderRadius: '12px',
  border: 'none',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
};

const feedbackStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '20px 0',
  animation: 'fadeIn 0.5s',
};
