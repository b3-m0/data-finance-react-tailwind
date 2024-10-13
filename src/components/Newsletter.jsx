import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-[#233c67] px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-white py-2'>
            Stay Updated with Sunrise Insights!
          </h1>
          <p className='text-gray-300'>
            Sign up for our newsletter to receive valuable tips, success stories, and updates on how you can make a difference in the lives of foster children.
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter your email address'
            />
            <button className='bg-[#FFA500] text-black rounded-md font-semibold w-[200px] ml-4 my-6 px-6 py-3 hover:bg-[#ff9800] transition duration-300'>
              Sign Up Now
            </button>
          </div>
          <p className='text-gray-300'>
            Your privacy is important to us. We care about the protection of your data. Please read our{' '}
            <span className='text-[#FFA500] font-bold cursor-pointer hover:underline'>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;