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
            className='bg-blue-500 font-mono text-white flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-blue-600 my-2 text-2xl'
          >
            <span className="mr-4">Premier League</span>
            <img className="home-image" src='Images/Premier.png' alt='Premier League' />
          </button>

          {/* Button for Championship (Ipswich Town) */}
          {/* <button
            onClick={() => handleStartGame('Championship (Ipswich Town)')}
            className='bg-blue-500 font-mono text-white flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-blue-600 my-2 text-2xl'
          >
            <span className="mr-4">Ipswich</span>
            <img className="home-image" src='Images/championship.png' alt='Championship' />
          </button> */}
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
