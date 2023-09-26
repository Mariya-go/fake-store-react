import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fragrances">Fragrances</NavLink>
        </li>
        <li>
          <NavLink to="/skincare">Skincare</NavLink>
        </li>
        <li>
          <NavLink to="/forWomen">For Women</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
