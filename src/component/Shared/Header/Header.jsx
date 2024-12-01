import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header class="bg-slate-50 shadow-md  p-4">
      <div class=" mx-auto flex justify-between items-center">
        {/* <!-- Brand Logo or Site Name --> */}
        <NavLink to="/" class="text-4xl font-bold text-blue-600">
          BrandName
        </NavLink>
    
        {/* <!-- Navigation Links --> */}
        <ul class="hidden md:flex space-x-6 menu menu-horizontal px-1">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/product">Product/Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    
        {/* <!-- Icons Section --> */}
        <div class="flex items-center space-x-4">
          {/* <!-- Cart Icon --> */}
          <a href="#" class="relative text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5 21h14l-2-8H7z" />
            </svg>
          </a>
    
          {/* <!-- User Profile Icon --> */}
          <div class="relative group">
            <button class="text-gray-600 hover:text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.121A4 4 0 0112 15a4 4 0 016.879 4.121M15 11a4 4 0 10-8 0m4 4a4 4 0 004 4m0 0a4 4 0 01-4-4" />
              </svg>
            </button>
            {/* <!-- Dropdown Menu --> */}
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 hidden group-hover:block">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    

    //     <div>
    //     <div className="navbar bg-base-100">
    //      <div className="flex-1">
    //        <NavLink to="/" className="btn btn-ghost text-xl">React Router Dom</NavLink>
    //      </div>
    //      <div className="flex-none">
    //           <ul className="menu menu-horizontal px-1">
    //           {/* <li><Link  to="/">Home</Link></li>
    //           <li><Link to="/about">About</Link></li> */}
    //           {/* alternative */}
    //           <li><NavLink to="/">Home</NavLink></li>
    //           <li><NavLink to="/about">About</NavLink></li>
    //           <li><NavLink to="/product">Product/Services</NavLink></li>
    //           <li><NavLink to="/contact">Contact</NavLink></li>
    //           </ul>
    //      </div>
    //  </div> 
    //  </div>
    );
};

export default Header;