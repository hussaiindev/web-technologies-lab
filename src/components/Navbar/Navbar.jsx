// src/components/Navbar.jsx

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          Skill<span>Barter</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNav">
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Browse Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Barter Board
              </a>
            </li>
          </ul>

          {/* Right buttons */}
          <div className="d-flex align-items-center gap-3">
            <a className="nav-link" href="#">
              Log In
            </a>
            <button className="btn-join">Join Free</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;