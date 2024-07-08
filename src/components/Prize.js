import React from 'react';
import '../styles/Prize.css';
import prizeImage from '../images/шарики.png';

const Prize = () => {
  return (
    <div className="prize">
      <h2>Congratulations! You have solved all the riddles and won the prize!</h2>;
      <img src={prizeImage} alt="Your prize" />
    </div>
  );
};

export default Prize;
