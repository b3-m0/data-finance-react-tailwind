import React from 'react';
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('/form');
  };

  return (
    <div className='text-[#233c67] bg-gradient-to-b from-orange-300 via-pink-400 to-purple-600 min-h-screen flex flex-col justify-center items-center'>
      <div className='max-w-[800px] w-full text-center flex flex-col justify-center items-center px-4'>
        <div style={{ fontFamily: 'Droid Sans' }} className='mb-4'>
          <p className='text-[#233c67] font-bold text-lg'>
            Empowering Foster Youth, One Step at a Time
          </p>
        </div>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold text-white md:py-4'>
          Your Path to a Bright Future Starts Here
        </h1>
        <div className='flex justify-center items-center mt-4'>
          <p className='md:text-2xl sm:text-2xl text-xl font-bold'>
            Join a community that
          </p>
          <Typed
            className='md:text-2xl sm:text-2xl text-xl font-bold md:pl-1.5 pl-1'
            strings={['values you.', 'listens to you.', 'helps you feel at home.']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
        <p className='md:text-2xl sm:text-xl text-lg font-medium text-gray-200 mt-6'>
          Explore opportunities for personal growth, mental wellbeing, career development, and a supportive community.
        </p>
        <button className='bg-[#6c8dbb] hover:bg-[#4e709a] text-white w-[200px] rounded-md font-medium my-6 py-3' onClick={goToForm}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
