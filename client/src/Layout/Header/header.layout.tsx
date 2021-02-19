import React from "react";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a className="navbar-brand">
            <p className="h2">Mega Store</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2 mb-2">
                <Link to="/signup">
                  <button type="button" className="btn btn-dark">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li className="nav-item me-2 mb-2">
                <Link to="/login">
                  <button type="button" className="btn btn-dark">
                    Login
                  </button>
                </Link>
              </li>
              <li className="nav-item me-2 mb-2">
                <button type="button" className="btn btn-dark">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
