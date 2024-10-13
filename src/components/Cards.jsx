import React from 'react';
import Mentor from '../assets/single.png';
import Community from '../assets/double.png';
import Resources from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-gradient-to-r from-orange-400 to-pink-600'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* Mentor Program Card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Mentor} alt="Mentorship" />
          <h2 className='text-2xl font-bold text-center py-8'>Mentorship Program</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>One-on-One Guidance</p>
            <p className='py-2 border-b mx-8'>Personalized Support</p>
            <p className='py-2 border-b mx-8'>Experience-based Learning</p>
          </div>
          <button className='bg-[#FFA500] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ff9800] transition duration-300'>Join Now</button>
        </div>

        {/* Community Support Card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Community} alt="Community Support" />
          <h2 className='text-2xl font-bold text-center py-8'>Community Support</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Peer Networking</p>
            <p className='py-2 border-b mx-8'>Workshops & Events</p>
            <p className='py-2 border-b mx-8'>Safe Space for Sharing</p>
          </div>
          <button className='bg-[#FFA500] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ff9800] transition duration-300'>Get Involved</button>
        </div>

        {/* Resources Card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Resources} alt="Resources" />
          <h2 className='text-2xl font-bold text-center py-8'>Essential Resources</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Job Opportunities</p>
            <p className='py-2 border-b mx-8'>Mental Health Support</p>
            <p className='py-2 border-b mx-8'>Educational Materials</p>
          </div>
          <button className='bg-[#FFA500] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ff9800] transition duration-300'>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;