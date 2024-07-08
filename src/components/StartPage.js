import React from 'react';
import '../styles/StartPage.css';

const StartPage = ({ onStart }) => {
  return (
    <div className="start">
      <h1>Welcome to the Riddle Game</h1>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
};

export default StartPage;
