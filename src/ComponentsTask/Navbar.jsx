

import { NavLink } from "react-router-dom";

export default function Navbar() {

    return(
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary shadow-sm px-4">

        <NavLink to="/Clock" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} > Clock </NavLink>
        <NavLink to="/ProfileCard" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} > ProfileCard </NavLink>
        <NavLink to="/ExpenseTracker" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} > ExpenseTracker </NavLink>
        <NavLink to="/ProgressBar" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} > ProgressBar </NavLink>
        <NavLink to="/StarRating" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} > StarRating </NavLink>
        
        </nav>
    );
    
}