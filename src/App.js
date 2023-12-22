import React, { useState } from 'react';
import footballersData from './Data/FootballerData';
import { GameProvider } from './Context/GameContext';
import Question from './Components/Question';
import Timer from './Components/Timer';
import Homepage from './Pages/Homepage';
import Score from './Components/Score';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [scoreVisible, setScoreVisible] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleMainMenu = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setAnswerCorrect(false);
    setSelectedLeague('');
  };

  const handleTimerFinish = () => {
    setGameOver(true);
    setScoreVisible(true);
  };

  const handleStartGame = (league) => {
    setSelectedLeague(league);
    setGameOver(false);
  };

  const renderGame = () => {
    if (!selectedLeague) {
      return <Homepage setGameStarted={handleStartGame} />;
    }

    if (gameOver) {
      return (
        <div>
          <header className='bg-gray-900 text-white p-4 flex justify-between items-center'>
            <div>
              <h1 className='text-xl py-2 font-mono'>Football Player Quiz</h1>
            </div>
            <nav></nav>
          </header>

          <div className="flex flex-col items-center font-mono">
            <h2 className="text-3xl pt-10">Time is up!</h2>
            <p className="text-3xl p-5 align-center">You scored:</p>
            <p className="text-3xl p-5 align-center">{score}</p>
            <div className='pt-10 flex flex-row items-center p-4 align-center'>
              <button
                className="bg-gray-800 text-white px-4 py-2  mb-3 rounded transition-colors duration-300 hover:bg-blue-600 w-52 h-20"
                onClick={handleMainMenu}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      );
    }

    const filteredFootballersData = footballersData.filter((footballer) => footballer.league === selectedLeague);

    if (currentQuestionIndex >= filteredFootballersData.length) {
      setGameOver(true);
      return null;
    }

    const currentQuestion = filteredFootballersData[currentQuestionIndex];

    return (
      <div>
        <header className='bg-gray-100 text-white p-4 flex justify-between items-center'>
          <div>
            <button className='text-sm bg-gray-100 text-black px-4 py-2 rounded mx-2 font-semibold font-mono' onClick={handleMainMenu}>
              Quit
            </button>
          </div>
          <nav>
            <ul className='flex items-center space-x-4'></ul>
          </nav>
        </header>

        <GameProvider>
          <Question
            questionData={currentQuestion}
            handleAnswer={handleAnswer}
            footballersData={filteredFootballersData}
            selectedLeague={selectedLeague}
            answerCorrect={answerCorrect}
            setAnswerCorrect={setAnswerCorrect}
          />
          {answerCorrect && (
            <div className='flex flex-col items-center'>
              {/* Content for when the answer is correct */}
            </div>
          )}
          <Score score={score} />
          <Timer setGameOver={setGameOver} gameOver={gameOver} />
        </GameProvider>
      </div>
    );
  };

  return <div>{renderGame()}</div>;
};

export default App;
