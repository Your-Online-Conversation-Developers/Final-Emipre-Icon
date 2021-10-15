import React from 'react'

const SocialIcons = () => {
    return (
        <nav className="social">
            <ul>
                {/* <li className="twitter"><a href="/">
                    <i className="fab fa-twitter" aria-hidden="true"></i></a></li> */}
                <li className="facebook"><a href="https://www.facebook.com/empireicon/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                {/* <li className="google-plus"><a href="/">
                    <i className="fab fa-youtube" aria-hidden="true"></i></a></li> */}
                <li className="instagram"><a href="https://www.instagram.com/empireiconpk/"  target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
        </nav>
    )
}

export default SocialIcons
