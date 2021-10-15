import React from "react";
import { Link } from "react-router-dom";
import Heading from "./elements/Heading";

const Projects = () => {
  return (
    <div className="projects-section alt-bg" id="projects">
      <div className="container">
        <div className="section-head">
          <div className="row text-center">
            <div className="col-md-12">
              <Heading
                h2Text="Our"
                spanText="Projects"
                h4Text="Lets take a look at Our Projects"
              />
            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .section-head */}
        <div className="row">
          <div className="col-sm-6 col-md-4 projects-item">
            <Link to="/al-ghaffar-heights">
              <img src="images/projects/al-ghaffar.webp" alt="project" />
            </Link>
            <div className="project-desc text-center">
              <h4>Al Ghaffar Heights</h4>
              <Link to="/al-ghaffar-heights" className="project-link">
                Read More
              </Link>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 projects-item">
            <Link to="/indus-empire">
              <img src="images/projects/indus-empire.webp" alt="project" />
            </Link>
            <div className="project-desc text-center">
              <h4>Indus Empire</h4>
              <Link to="/indus-empire" className="project-link">
                Read More
              </Link>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 projects-item">
            <Link to="/empire-business-center">
              <img src="images/projects/empire-business.webp" alt="project" />
            </Link>
            <div className="project-desc text-center">
              <h4>Empire Business Center</h4>
              <Link to="/empire-business-center" className="project-link">
                Read More
              </Link>
            </div>
          </div>
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </div>
  );
};

export default Projects;
