import React from 'react';
import '../styles/CorrectModal.css';

const CorrectModal = ({ show, onContinue, currentRiddleIndex, totalRiddles }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Correct!</h2>
        <p>You have solved {currentRiddleIndex + 1} out of {totalRiddles} riddles.</p>
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default CorrectModal;
