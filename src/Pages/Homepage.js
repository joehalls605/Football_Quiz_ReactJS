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
    
      <div className='flex-grow flex flex-col md:flex-row items-center mb-9 mt-9 justify-center'>
      <h2 className='text-2xl mt-5'>
      Welcome to Kick IQ, the ultimate platform to test and enhance your football knowledge ⚽
      </h2>
          </div>
      {/* Main content section */}
      <main className='flex-grow flex flex-col md:flex-row items-center p-7 justify-center'>
        
        {/* Left column for "Pick your league" and buttons */}
        <div className='flex flex-col items-center md:mr-8 mb-12'>
          <h2 className='text-3xl font-bold py-8 text-white-400'>Choose your league</h2>
          <div className='flex flex-col space-y-4'>
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

        {/* Right column for the background image */}
        <div className='hidden md:block'>
          <img src='Images/background.png' alt='background' />
        </div>
      </main>
    <Footer/>

    </div>
  );
};

export default Homepage;
