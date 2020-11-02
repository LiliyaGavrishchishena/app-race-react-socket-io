import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-3 mb-2 bg-secondary text-white">
      <ul className="nav bg-secondarys">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/login">Logout</Link>
        </li>
      </ul>
  </nav>

  )
};

export default Navbar;
