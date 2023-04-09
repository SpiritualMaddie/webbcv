import React, { useState } from "react";
import { Link } from "react-router-dom";
import picMe from "../img/me.png";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid h3">
          <button
            type="button"
            className="navbar-toggler"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <br/><br/>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/presentation' className="nav-link">
                  Presentation
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/portfolio' className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/cv' className="nav-link">
                  Cv
                </Link>
              </li>
            </ul>
          </div>
          <img className="profilePicture" src={picMe} alt="Picture of me" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;