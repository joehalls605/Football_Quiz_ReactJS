import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Homepage = ({ setGameStarted }) => {
  const handleStartGame = (league) => {
    setGameStarted(league);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header section */}
      <Header/>
    
      <div className='flex-grow flex flex-col md:flex-row items-center mb-4 mt-9 justify-center'>
      <h2 className='text-2xl font-bold text-white-400 mt-1 mx-4 md:mx-0'>
        Time to test and enhance your football knowledge 💡
      </h2>
          </div>
      {/* Main content section */}
      <main className='flex-grow flex flex-col md:flex-row items-center justify-center'>
        
        {/* Left column for "Pick your league" and buttons */}
        <div className='flex flex-col items-center md:mr-8 mb-12'>
          <h2 className='text-2xl font-bold text-white-400 mt-1 mx-4 md:mx-0'>When you're ready to start the game, select your league.</h2>
          <div className='flex flex-col space-y-4 mt-8 md:mx-0'>
            {/* Buttons for different leagues */}
            {/* Premier League */}
            <button
              onClick={() => handleStartGame('Premier League')}
              className='bg-gray-300 border-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-gray-200 hover:text-black my-2 text-2xl h-30 w-80 h-40'
            >
              <span className="mr-4">Premier League</span>
              <img className="home-image" src='Images/Premier.png' alt='Premier League' />
            </button>

            {/* Championship */}
            <button
              onClick={() => handleStartGame('Championship')}
              className='bg-gray-300 border-black text-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-gray-200 hover:text-black my-2 text-2xl h-30 w-80 h-40'
            >
              <span className="mr-4">Championship</span>
              <img className="home-image" src='Images/championship.png' alt='Championship' />
            </button>

            {/* La Liga */}
            <button
              onClick={() => handleStartGame('LaLiga')}
              className='bg-gray-300 border-black text-black flex items-center justify-center px-10 py-4 rounded transition-colors duration-300 hover:bg-gray-200 hover:text-black my-2 text-2xl h-30 w-80 h-40'
            >
              <span className="mr-4">LaLiga</span>
              <img className="home-image" src='Images/laliga.png' alt='LaLiga' />
            </button>
          </div>
        </div>
      </main>
    <Footer/>

    </div>
  );
};

export default Homepage;
