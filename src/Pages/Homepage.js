import React from 'react';

const Homepage = ({ setGameStarted }) => {
  const handleStartGame = (league) => {
    setGameStarted(league);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header section */}
      <header className='bg-gray-900 text-white p-4 flex justify-between items-center'>
        <div>
          <h1 className='text-xl py-2 '>Football Player Quiz</h1>
        </div>
        <nav>
          <ul className='flex items-center space-x-4'>
            <li className='ml-2 '>Scoreboard</li>
          </ul>
        </nav>
      </header>

      {/* Main content section */}
      <main className='flex-grow flex flex-col items-center p-10'>
        <h2 className='text-2xl py-6 '>Choose your league</h2>
        <div className='flex space-x-4'>
          {/* Buttons for different leagues */}
          {/* Premier League */}
          <button
            onClick={() => handleStartGame('Premier League')}
            className='bg-gray-300 border-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300  hover:bg-gray-200 hover:text-black my-2 text-2xl'>
            <span className="mr-4">Premier League</span>
            <img className="home-image" src='Images/Premier.png' alt='Premier League' />
          </button>

          {/* Championship */}
          <button
            onClick={() => handleStartGame('Championship')}
            className='bg-gray-300 border-black text-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-gray-200 hover:text-black my-2 text-2xl'
          >
            <span className="mr-4">Championship</span>
            <img className="home-image" src='Images/championship.png' alt='Championship' />
          </button>

          {/* La Liga */}
          <button
            onClick={() => handleStartGame('LaLiga')}
            className='bg-gray-300 border-black text-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-gray-200 hover:text-black my-2 text-2xl'
          >
            <span className="mr-4">LaLiga</span>
            <img className="home-image" src='Images/laliga.png' alt='LaLiga' />
          </button>
        </div>

        {/* Background image */}
        <img src='Images/background.png' alt='background'  />

      </main>

      {/* Footer section */}
      <footer className='bg-gray-900 text-white p-4 text-center font-mono'>
        <p className='text-xs'>&copy; {new Date().getFullYear()} Football Player Quiz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
