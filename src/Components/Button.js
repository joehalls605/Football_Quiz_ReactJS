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

// Determine button classes based on selection and correctness
const buttonClass = `bg-gray-800 border text-xl text-white px-4 py-2 rounded transition-all duration-300 focus:outline-none focus:ring focus:border-gray-700 ${
  isSelected ? (isCorrect ? 'bg-green-500 border-8 border-green-500' : 'bg-red-500 border-8 border-red-700') : ''
}`;

const hoverClass = `hover:bg-gray-700 hover:text-white`;


// Render the Button component
return (
  <div>
    <button className={`${buttonClass} ${hoverClass} w-60 h-40 text-lg`} onClick={handleClick} disabled={isSelected}>
      {name}
    </button>
  </div>
);

};

export default Button;
