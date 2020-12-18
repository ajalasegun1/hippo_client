import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ boxShadow: "-1px 2px 10px -1px #000000" }}
      >
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
            style={{ padding: "3px" }}
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/">
                  <i
                    className="fas fa-home"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: "20px",
                    }}
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <i
                    className="fas fa-plus "
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: "20px",
                    }}
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <i
                    className="fas fa-bell"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: "10px",
                    }}
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
