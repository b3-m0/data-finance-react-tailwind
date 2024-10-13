import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Forum = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='Connecting with Mentors' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#FFA500] font-bold'>JOIN THE SUNRISE FORUM</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Connect with Compassionate Mentors
          </h1>
          <p className='py-4 text-gray-600'>
            Welcome to the <span className="font-bold">Sunrise Forum</span>, a safe and welcoming space where foster children can connect with experienced mentors who understand their journey. Our forum offers opportunities to engage in meaningful conversations, share experiences, and receive guidance from individuals who have faced similar challenges.
            <br /><br />
            Whether you’re looking for advice, support, or just someone to talk to, the Sunrise Forum is here to help you navigate your path. Join us today and take the first step towards a brighter future!
          </p>
          <button className='bg-[#233c67] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#1a2a48] transition duration-300'>
            Join the Forum
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forum;