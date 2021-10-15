import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 dan col-sm-6 col-md-3 mt-2 mobile-center">
            <Link to="/" className="footer-logo">
              <img src="images/logo.png" alt="logo" className="foot-logo" />
            </Link>
            <p>
            Backed by a visionary real estate leadership, Empire Icon is a regal enterprise that redefines luxury by creating grand opportunities for homeowners who dream about affording an exceptional lifestyle in Bahria Town.
            </p>

            
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 ">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Our Partners</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <a href="https://casamiadreams.com/" target="_blank" rel="noreferrer" >Casamia Dreams</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 footer-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="icofont icofont-flag-alt-1"></i>
                <a href="/">
                  Precinct 14, Plot 17, Bahria Town Karachi, Pakistan
                </a>
              </li>
              <li>
                <i className="icofont icofont-clock-time"></i>
                <a href="/">Mon - Sat: 07:00 - 18:00</a>
              </li>
              <li>
                <i className="icofont icofont-phone"></i>
                <a href="tel:0302 9228222"> 0302 9228222</a>
              </li>
              <li>
                <i className="icofont icofont-envelope"></i>
                <a href="mailto:info@empireicon.com">info@empireicon.com</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 mobile-center">
            <h4>Get Direction</h4>
            <div className="footer-map">
            <embed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4015369166577!2d67.32999051432422!3d25.054376143629803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34b525fa737f9%3A0x43624028ddb19e6!2sEmpire%20Icon!5e0!3m2!1sen!2s!4v1631116163833!5m2!1sen!2s" width="300" height="200" style={{"border":0}} allowFullScreen="" loading="lazy"></embed>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mtt-2">Powered by <a href="https://www.youronlineconversation.com/"><b>Your Online Conversation</b></a></div>
      </div>

      
    </div>
  );
};

export default Footer;
