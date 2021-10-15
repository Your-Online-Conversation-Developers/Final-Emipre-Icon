import React from 'react'
import { Link } from "react-scroll";

const Call = () => {
    return (
        <div className="calltoaction">
            <Link
                  className="nav-item"
                  to="appointment-form"
                  smooth={true}
                  spy={true}
                  offset={-85}
                >
                 <i className="icofont icofont-ui-call"></i>
                </Link>
        </div>
    )
}

export default Call