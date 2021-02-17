import React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a className="navbar-brand">
            <p className="h2">
              <span>Mega</span> Store
            </p>
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
              <li className="nav-item me-2">
                <button type="button" className="btn btn-dark">
                  Sign Up
                </button>
              </li>
              <li className="nav-item me-2">
                <button type="button" className="btn btn-dark">
                  Login
                </button>
              </li>
              <li className="nav-item me-2">
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
