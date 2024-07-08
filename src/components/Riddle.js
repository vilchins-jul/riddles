import React, { useState, useEffect } from 'react';
import '../styles/Riddle.css';

const Riddle = ({ riddle, onAnswer, resetInput }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setUserAnswer('');
    setIsCorrect(false);
  }, [resetInput, riddle]);

  const checkAnswer = () => {
    if (userAnswer.trim().toLowerCase() === riddle.answer.toLowerCase()) {
      setIsCorrect(true);
      onAnswer(true);
    } else {
      alert('Wrong answer, try again!');
    }
  };

  return (
    <div className="riddle">
      <p>{riddle.question}</p>
      <div className="input-button">
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit</button>
      </div>
      {isCorrect && <p>Correct!</p>}
    </div>
  );
};

export default Riddle;
