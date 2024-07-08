import React, { useState } from 'react';
import Riddle from './Riddle';
import riddles from '../data/riddles';
import CorrectModal from './CorrectModal';

const RiddleList = ({ onComplete }) => {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [resetInput, setResetInput] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setShowModal(true);
    }
  };

  const handleContinue = () => {
    setShowModal(false);
    if (currentRiddleIndex + 1 === riddles.length) {
      onComplete();
    } else {
      setCurrentRiddleIndex(currentRiddleIndex + 1);
      setResetInput(prev => !prev);
    }
  };

  return (
    <div>
      <Riddle 
        riddle={riddles[currentRiddleIndex]} 
        onAnswer={handleAnswer} 
        resetInput={resetInput}
      />
      <CorrectModal 
        show={showModal} 
        onContinue={handleContinue} 
        currentRiddleIndex={currentRiddleIndex}
        totalRiddles={riddles.length}
      />
    </div>
  );
};

export default RiddleList;
