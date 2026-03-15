import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Instagram, Whatsapp, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#3a7453", color: "white" }} className="pt-5 pb-4">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Column 1 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h4 className="fw-bold">GreenNest.</h4>
            <p className="small">
              Food Dash ©2023 All Rights Reserved <br />
              By - Owner Name
            </p>

            <p className="fw-semibold mb-2">Follow us on</p>

            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <Instagram size={22} />
              <Whatsapp size={22} />
              <Twitter size={22} />
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold mb-3">Menu</h5>
            <p>Home</p>
            <p>Categories</p>
            <p>GreenNest AI</p>
            <p>Blogs</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold mb-3">Information</h5>
            <p>Current Trends</p>
            <p>Gardenings and Government</p>
            <p>Sustainable Practices</p>
            <p>Join the team</p>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold mb-3">Information</h5>
            <p>+917274947333,</p>
            <p>Explore</p>
            <p>GreenNest@gmail.com</p>
            <p>
              Visawa Corner , Jintur Road , <br />
              Parbhani - 431401
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;