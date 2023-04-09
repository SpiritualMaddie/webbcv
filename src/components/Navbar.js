import React, { useState } from "react";
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/presentation">
                  Presentation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cv">
                  Cv
                </a>
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