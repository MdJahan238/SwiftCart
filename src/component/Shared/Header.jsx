import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div className="navbar bg-base-100">
         <div className="flex-1">
           <NavLink to="/" className="btn btn-ghost text-xl">React Router Dom</NavLink>
         </div>
         <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
              {/* <li><Link  to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li> */}
              {/* alternative */}
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              </ul>
         </div>
     </div> 
     </div>
    );
};

export default Header;