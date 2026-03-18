import React from "react";
import Navbar from "./Navbar";

const GreenNestLogin = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid main-container">
      <div className="row login-wrapper">

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 d-none d-lg-flex image-section">
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="col-lg-6 col-12 form-section">
          <div className="form-box">

            <h4 className="brand">GREENNEST.</h4>
            <br/><br/>

            <h1 className="loginheading">Hii green keeper</h1>
            <p className="sub-text">Grow your green world with us</p>

            <input type="email" placeholder="Email" className="form-control" />
            <input type="password" placeholder="Password" className="form-control mt-3" />

            <div className="d-flex justify-content-between small mt-2">
              <span></span>
              <a href="#">Forgot password?</a>
            </div>

            <div className="divider">or</div>

            <button className="btn google-btn">
              <i className="fab fa-google me-2"></i>
              Login with Google
            </button>

            <button className="btn login-btn">Login</button>

            <p className="signup-text">
              Don't have an account? <a href="#">Sign up</a>
            </p>

            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default GreenNestLogin;