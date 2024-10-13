import React from 'react';
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('/form');
  };

  return (
    <div className='text-[#233c67]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div style={{fontFamily: 'Droid Sans'}}>
        <p className='text-[#233c67] font-bold p-2'>
          ______________________
          
        </p>
        </div>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-4'>
          Foster Care Community
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-2xl sm:text-2xl text-xl font-bold py-4'>
            Discover a community that
          </p>
          <Typed
          className='md:text-2xl sm:text-2xl text-xl font-bold md:pl-2 pl-2'
            strings={['values you,', 'listens to you,', 'helps you feel at home.']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-[#CCCCFF]0'>Discover resources for job opportunities, mental wellbeing, and community support.</p>
        <button className='bg-[#99afd7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={goToForm}>Get Started</button>
      </div>
    </div>
  );
};


export default Hero;
