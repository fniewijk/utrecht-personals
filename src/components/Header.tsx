import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Utrecht Personals</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
          <li>
            <Link to="/profile/1">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
