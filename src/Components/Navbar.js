import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css'; // Optional styling file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Workspace</div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/counter" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/todolist" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Todo List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
