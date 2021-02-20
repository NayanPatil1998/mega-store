import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebase";
import { IinitialState } from "../../Redux/Reducers";
import "react-toastify/dist/ReactToastify.css";

const Header: React.FunctionComponent = () => {
  toast.configure();
  const state = useSelector((state: IinitialState) => state);
  const signOut = () => {
    auth.signOut();
    toast.info("Sign out successful");
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          {/* eslint-disable-next-line */}
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
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <h5 className="nav-link">
                  Hello {state.user ? state.user.displayName : "Guest"}
                </h5>
              </li>
              {state.user == null ? (
                <li className="nav-item me-2 mb-2">
                  <Link to="/signup">
                    <button type="button" className="btn btn-dark">
                      SignUp / Login
                    </button>
                  </Link>
                </li>
              ) : (
                <li className="nav-item me-2 mb-2">
                  <button
                    onClick={signOut}
                    type="button"
                    className="btn btn-dark"
                  >
                    Sign Out
                  </button>
                </li>
              )}
              {/* <li className="nav-item  mb-2">
                <ShoppingBasket
                  className=""
                  style={{ fontSize: "30px", display: "inline-block" }}
                />
                <h5 className="pt-1" style={{ display: "inline-block" }}>
                  2
                </h5>
              </li> */}
              <li className="nav-item">
                {/* eslint-disable-next-line */}
                <a className="nav-link ">
                  <span className="badge badge-pill bg-danger me-1">1</span>
                  <span>
                    <ShoppingBasket />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
