// Button.js
import React, { useState, useEffect } from 'react';
import correctAnswerSound from '../Audio/correct-answer.wav';

// Button component
const Button = ({ name, correctAnswer, handleAnswer, setAnswerCorrect }) => {
  // State for button selection and correctness
  const [isSelected, setSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Create an audio element for correct answer sound
  // const correctAnswerAudio = new Audio(correctAnswerSound);

  // useEffect to handle button selection and answer correctness
  useEffect(() => {
    if (isSelected) {
      setSelected(true);
      const isCorrectAnswer = name === correctAnswer;
      setIsCorrect(isCorrectAnswer);

      // Play correct answer sound if the answer is correct
      if (isCorrectAnswer) {
        // correctAnswerAudio.play();
      }

      // Delay for 800ms, then proceed to next question
      setTimeout(() => {
        handleAnswer(isCorrectAnswer);
        setAnswerCorrect(isCorrectAnswer);
        setSelected(false);
      }, 800); // Wait for 800ms before moving to the next question
    }
  }, [isSelected, name, correctAnswer, handleAnswer, setAnswerCorrect]);

  // Handle button click
  const handleClick = () => {
    setSelected(true);
  };

  const buttonClass = `bg-gray-300 border-2 text-xxl text-black px-2 py-2 rounded transition-all duration-300 focus:outline-none focus:ring ${
    isSelected 
      ? (isCorrect 
          ? 'border-green-500' 
          : 'border-red-500')
      : 'border-gray-800'
  }`;
  
  const hoverClass = `hover:bg-gray-700 hover:text-white`;


// Render the Button component
return (
  <div>
    <button className={`${buttonClass} ${hoverClass} w-80 h-60 text-2xl`} onClick={handleClick} disabled={isSelected}>
      {name}
    </button>
  </div>
);

};

export default Button;
