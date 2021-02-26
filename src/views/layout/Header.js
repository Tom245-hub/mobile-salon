import React from 'react';
import logo from '../../images/logo/mobile-salon-logo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    const handleMouseEnter = (e) => {
        if (e.target.parentElement.childElementCount >= 1) {
            if (e.target.parentElement.childNodes[1].classList.contains("hide")) {
                e.target.parentElement.childNodes[1].classList.remove("hide");
                e.target.parentElement.childNodes[1].classList.add("active");
            }
        }
    }

    return (
        <header>
            <img className="picture__logo" src={logo} alt="mobile_salon_logo" />
            <nav className="top-menu">
                <li>
                    <Link onMouseEnter={handleMouseEnter} to="#">Usługi <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <ul className="top-submenu hide">
                        <li>Fryzury ślubne</li>
                        <li>Makijaże ślubne</li>
                        <li>Fryzury okazyjne</li>
                        <li>Makijaże okazyjne</li>
                    </ul>
                </li>
                <li><Link to="#">Stylistki <FontAwesomeIcon icon={faChevronDown} /></Link></li>
                <li><Link to="#">Blog <FontAwesomeIcon icon={faChevronDown} /></Link></li>
            </nav>



            <div className="user-container">
                <Link className="login-box" to="#">
                    <h3 className="login-text">ZALOGUJ <FontAwesomeIcon icon={faSignInAlt} /></h3>
                </Link>
                <Link className="reservation-box" to="#">
                    <h3 className="reservation-text">ZAREZERWUJ</h3>
                </Link>
            </div>
        </header>
    )
}

export default Header