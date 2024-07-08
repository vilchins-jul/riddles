import React, { useState } from 'react';
import StartPage from './components/StartPage';
import RiddleList from './components/RiddleList';
import Prize from './components/Prize';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  return (
    <div className="App">
      {isStarted ? (
        isComplete ? (
          <Prize />
        ) : (
          <RiddleList onComplete={handleComplete} />
        )
      ) : (
        <StartPage onStart={handleStart} />
      )}
    </div>
  );
};

export default App;
