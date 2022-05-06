import React from "react";
import './footer.css'
const Footer = () => {
  const logo = require("../../assets/images/logo.png")
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">

          <section className="">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-4 mb-md-0">
                <h5 className="pointer"><img src={logo} className="logo" alt="logo"/>dukaan</h5>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact</h5>
                <h5 className="text-uppercase">FAQ's</h5>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Tutorials</h5>
                <h5 className="text-uppercase">Blogs</h5>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Privacy</h5>
                <h5 className="text-uppercase">Banned Items</h5>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">About</h5>
                <h5 className="text-uppercase">Jobs</h5>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Facebook</h5>
                <h5 className="text-uppercase">Twitter</h5>
                <h5 className="text-uppercase">LinkedIn</h5>
              </div>
            </div>
          </section>
        </div>
        <hr className='my-1 w-75 m-auto'/>
        <div className="footer-box">
            <div className="p-3">
              Dukaan 2022. All Rights Reserved
            </div>
            <div className="p-3">
              Made in 🇮🇳
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
