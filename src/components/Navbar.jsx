import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div style={{ fontFamily: 'Mukta', backgroundColor: 'white' }}>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#000000]'>
      <h1 className='text-3xl font-bold'>SUNRISE.</h1>
      {/* Main navigation */}
      <nav>
          <ul className='hidden md:flex space-x-'>
            <li>
              <NavLink to="/home" activeClassName="active" className="text-lg font-semibold text-[#000000] hover:text-[#000000] transition duration-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" className="text-lg font-semibold text-black hover:text-[#0029df] transition duration-300">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" activeClassName="active" className="text-lg font-semibold text-black hover:text-[#0029df] transition duration-300">
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/company" activeClassName="active" className="text-lg font-semibold text-black hover:text-[#0029df] transition duration-300">
                Company
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" className="text-lg font-semibold text-black hover:text-[#0029df] transition duration-300">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active" className="text-lg font-semibold text-black hover:text-[#0029df] transition duration-300">
                Log In
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} className="text-[#000000]" /> : <AiOutlineMenu size={20} className="text-[#000000]" />}
        </div>

        {/* Mobile menu */}
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fffbf7] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#0029df] m-4'>SUNRISE.</h1>
          <li className='p-4 border-b border-black-600 hover:bg-gray-200'>
            <NavLink to="/home" activeClassName="active" className="text-black">Home</NavLink>
          </li>
          <li className='p-4 border-b border-black-600 hover:bg-gray-200'>
            <NavLink to="/company" activeClassName="active" className="text-black">Company</NavLink>
          </li>
          <li className='p-4 border-b border-black-600 hover:bg-gray-200'>
            <NavLink to="/resources" activeClassName="active" className="text-black">Resources</NavLink>
          </li>
          <li className='p-4 border-b border-black-600 hover:bg-gray-200'>
            <NavLink to="/about" activeClassName="active" className="text-black">About</NavLink>
          </li>
          <li className='p-4 hover:bg-gray-200'>
            <NavLink to="/contact" activeClassName="active" className="text-black">Contact</NavLink>
          </li>
          <li className='p-4 hover:bg-gray-200'>
            <NavLink to="/login" activeClassName="active" className="text-black">Log In</NavLink>
          </li>
        </ul>
    </div>
    </div>
  );
};

export default Navbar;
