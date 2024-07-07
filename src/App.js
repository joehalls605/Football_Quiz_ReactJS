import React, { useState } from 'react';
import footballersData from './Data/FootballerData';
import { GameProvider } from './Context/GameContext';
import Question from './Components/Question';
import Timer from './Components/Timer';
import Homepage from './Pages/Homepage';
import Score from './Components/Score';
import Header from './Components/Header';

const App = () => {

  // App state set up
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [scoreVisible, setScoreVisible] = useState(false);

  // Handle user answer input
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Setting the main menu state
  const handleMainMenu = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setAnswerCorrect(false);
    setSelectedLeague('');
  };

  // Handle timer finish
  const handleTimerFinish = () => {
    setGameOver(true);
    setScoreVisible(true);
  };

  // Handle start game
  const handleStartGame = (league) => {
    setSelectedLeague(league);
    setGameOver(false);
  };

  // Rendering the application
  const renderGame = () => {
    if (!selectedLeague) {
      return <Homepage setGameStarted={handleStartGame} />;
    }

    if (gameOver) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
     
          <div className="flex flex-col items-center mt-4">
            <h2 className="text-5xl">Full time! ⚽</h2>
            <p className="text-3xl mt-9">Your score:</p>
            <p className="text-3xl mt-2">{score}</p>
            <div className='mt-8'>
              <button
                className="bg-gray-800 text-white text-xl px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-900"
                onClick={handleMainMenu}
              >
                Back to Main Menu
              </button>
            </div>
          </div>
        </div>
      );
    }

    // filtering the footballer data
    const filteredFootballersData = footballersData.filter((footballer) => footballer.league === selectedLeague);

    if (currentQuestionIndex >= filteredFootballersData.length) {
      setGameOver(true);
      return null;
    }

    const currentQuestion = filteredFootballersData[currentQuestionIndex];

    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <header className='bg-gray-900 text-white w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-500'>
          <button className='text-lg text-white px-4 py-2 rounded ml-4 font-semibold' onClick={handleMainMenu}>
            Quit
          </button>
        </header>
        <GameProvider>
          <div className="flex flex-col items-center justify-center flex-1 mb-8">
            <Question
              questionData={currentQuestion}
              handleAnswer={handleAnswer}
              footballersData={filteredFootballersData}
              selectedLeague={selectedLeague}
              answerCorrect={answerCorrect}
              setAnswerCorrect={setAnswerCorrect}
            />
            {answerCorrect && (
              <div className='flex flex-col items-center mt-4'>
                {/* Content for when the answer is correct */}
              </div>
            )}
            <Timer setGameOver={setGameOver} gameOver={gameOver} />
            <Score score={score} />
          </div>
        </GameProvider>
      </div>
    );
  };

  return <div>{renderGame()}</div>;
};

export default App;
