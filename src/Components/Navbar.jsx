import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand" href="#">GreenNest.</a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Centered Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else</a></li>
              </ul>

            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">GreenNest AI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Blogs</a>
            </li>

          </ul>

          {/* Right Side Button */}
          <button className="btn btn-success">
            <i class="bi bi-person-circle"></i> &nbsp; Admin
          </button>

        </div>
      </div>
    </nav>
    <div className="green-line"></div>
    </>
  );
}

export default Navbar;