import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {

  
  return (
    <div id="navigation" className="top-bar">
      <nav className="navbar navbar-default">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#site-collapse-nav"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavLink className="navbar-brand nav-item" to="/">
              <img src="images/logo.png" alt="logo" className="top-logo" />
            </NavLink>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="site-collapse-nav">
            <ul className="navbar-right pt-30">
              <li>
                <p className="cc">For Bookings Call</p>
                <p className="bk">
                  <a href="tel:0302 9228222"> 0302 9228222</a>
                </p>
              </li>
            </ul>
            <ul className="nav nav-list navbar-nav navbar-right my-auto">
              <li>
                <Link
                  className="nav-item"
                  to="about"
                  smooth={true}
                  spy={true}
                  offset={-85}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="floorplans"
                  smooth={true}
                  spy={true}
                  offset={-85}
                >
                  Our Plans
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="tvc"
                  smooth={true}
                  spy={true}
                  offset={-85}
                >
                  Video Tour
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="gallery"
                  smooth={true}
                  spy={true}
                  offset={-85}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="location"
                  smooth={true}
                  spy={true}
                  offset={-85}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="projects"
                  smooth={true}
                  spy={true}
                  offset={-85}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
      </nav>
    </div>
  );
};

export default Header;
