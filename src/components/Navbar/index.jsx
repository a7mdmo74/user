import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from '../../assets/profile-pic.svg';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="bg-blue-400 w-full shadow-lg shadow-blue-200">
      <div className="flex items-center justify-around sm:justify-center max-w-6xl mx-auto space-x-14 p-4 ">
        <div>
          <img
            src={Avatar}
            alt="avatar"
            className="object-contain w-12 border-4 border-blue-500 rounded-full"
          />
        </div>
        <ul className="hidden sm:flex items-center justify-center space-x-8 text-white text-lg font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/add-child">Child Details</NavLink>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
        <ul
          className={`flex flex-col items-center justify-center space-y-4 absolute top-14 w-2/3 bg-white p-6 z-20 rounded-tl-lg rounded-bl-lg shadow-lg transition-all duration-500 text-center ${
            isActive ? '-left-0' : '-left-[100%]'
          }`}
        >
          <li className="hover:bg-gray-300 w-full p-1 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-300 w-full p-1 rounded-lg">
            <Link to="/service">Service</Link>
          </li>
          <li className="hover:bg-gray-300 w-full p-1 rounded-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-gray-300 w-full p-1 rounded-lg">
            <Link to="/add-child">Child Details</Link>
          </li>
          <li className="hover:bg-gray-300 w-full p-1 rounded-lg">
            <button>Logout</button>
          </li>
        </ul>
        <button className="sm:hidden" onClick={() => setIsActive(!isActive)}>
          Toggle
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
