import React from 'react';
import { useGameContext } from '../Context/GameContext';
import Question from '../Components/Question';
import Timer from '../Components/Timer';
import Score from '../Components/Score';
import footballersData from '../Data/FootballerData';

const Game = () => {
  const {
    currentQuestionIndex,
    handleAnswer,
    setGameOver,
    gameOver,
    score,
    selectedLeague,
    handleTimerFinish
  } = useGameContext();

  // Get the current question based on the currentQuestionIndex
  const currentQuestion = footballersData[currentQuestionIndex];

  return (
    <div className="p-2">
      <h1 className="p-4">Guess the footballer</h1>
      {/* Container div with padding for the Score component */}
      
      {/* Container div with padding for the Question component */}
      <div className="p-4">
        <Question
          selectedLeague={selectedLeague}
          questionData={currentQuestion}
          handleAnswer={handleAnswer}
          footballersData={footballersData}
        />
      </div>
      {/* Container div with padding for the Timer component */}
      <div className="p-4">
        {/* <Timer setGameOver={setGameOver} gameOver={gameOver} handleTimerFinish={handleTimerFinish} /> */}
      </div>
      <div className="p-4">
        {/* <Score score={score} /> */}
      </div>
    </div>
  );
};

export default Game;
