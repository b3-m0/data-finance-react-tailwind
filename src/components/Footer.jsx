import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-orange-400 to-pink-600 text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8'>
        {/* Brand Section */}
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold'>SUNRISE.</h1>
          <p className='py-4'>
            Empowering foster children through mentorship and resources.
          </p>
          <div className='flex space-x-4 my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

        {/* Links Section */}
        <div className='lg:col-span-2 grid md:grid-cols-4 gap-8 mt-6'>
          <div>
            <h6 className='font-medium text-gray-200'>Solutions</h6>
            <ul className='space-y-2'>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Mentorship</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Resources</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Community</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Events</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-gray-200'>Support</h6>
            <ul className='space-y-2'>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>FAQs</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Contact Us</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Feedback</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Help Center</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-gray-200'>Company</h6>
            <ul className='space-y-2'>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>About Us</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Blog</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Careers</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Press</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-gray-200'>Legal</h6>
            <ul className='space-y-2'>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Privacy Policy</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Terms of Use</li>
              <li className='text-sm hover:text-[#00df9a] cursor-pointer'>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='mt-8 text-center text-gray-200'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Sunrise. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
