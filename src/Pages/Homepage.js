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
          <h1 className='text-xl py-2 font-mono'>Football Player Quiz</h1>
        </div>
        <nav>
          <ul className='flex items-center space-x-4'>
            <li className='ml-2 font-mono'>Scoreboard</li>
          </ul>
        </nav>
      </header>

      {/* Main content section */}
      <main className='flex-grow flex flex-col items-center p-10'>
        <h2 className='text-2xl py-6 font-mono'>Choose your league</h2>
        <div className='flex space-x-4'>
          {/* Button for Premier League */}
          <button
            onClick={() => handleStartGame('Premier League')}
            className='bg-gray-300 border-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300  hover:bg-gray-900 hover:text-white my-2 text-2xl'>
            <span className="mr-4">Premier League</span>
            <img className="home-image" src='Images/Premier.png' alt='Premier League' />
          </button>

          {/* Button for Championship*/}
          { <button
            onClick={() => handleStartGame('Championship')}
            className='bg-gray-300 border-black text-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-gray-900 hover:text-white my-2 text-2xl'
          >
            <span className="mr-4">Championship</span>
            <img className="home-image" src='Images/championship.png' alt='Championship' />
          </button> }
            {/* Button for La Liga*/}
            { <button
            onClick={() => handleStartGame('LaLiga')}
            className='bg-gray-300 border-black text-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-gray-900 hover:text-white my-2 text-2xl'
          >
            <span className="mr-4">LaLiga</span>
            <img className="home-image" src='Images/laliga.png' alt='Championship' />
          </button> }
        </div>
      </main>

      {/* Footer section */}
      <footer className='bg-gray-900 text-white p-4 text-center font-mono'>
        <p className='text-xs'>&copy; {new Date().getFullYear()} Football Player Quiz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
