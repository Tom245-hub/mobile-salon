import React from 'react';
import logo from '../../images/logo/mobile-salon-logo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Header = () => {



    const handleMouseEnter = (e) => {
        if (e.target.parentElement.childElementCount >= 1) {
            if (e.target.parentElement.lastChild.classList.contains("hide")) {
                e.target.parentElement.lastChild.classList.remove("hide");
            }
        }
    }

    const handleMouseLeave = (e) => {
        if (!e.target.classList.contains("hide")) {

            e.target.classList.add("hide");
        }
    }

    return (
        <header>
            <img className="picture__logo" src={logo} alt="mobile_salon_logo" />
            <nav className="top-menu">
                <li>
                    <Link to="#" onMouseEnter={handleMouseEnter}>Usługi <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <ul className="top-submenu hide" onMouseLeave={handleMouseLeave}>
                        <li>Fryzury ślubne</li>
                        <li>Makijaże ślubne</li>
                        <li>Fryzury okazyjne</li>
                        <li>Makijaże okazyjne</li>
                    </ul>
                </li>
                <li>
                    <Link to="#" onMouseEnter={handleMouseEnter}>Stylistki <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <ul className="top-submenu hide" onMouseLeave={handleMouseLeave}>
                        <li>Warszawa</li>
                        <li>Kraków</li>
                        <li>Wrocław</li>
                        <li>Poznań</li>
                        <li>Gdańsk</li>
                    </ul>
                </li>
                <li>
                    <Link to="#" onMouseEnter={handleMouseEnter}>Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <ul className="top-submenu hide" onMouseLeave={handleMouseLeave}>
                        <li>Najnowsze artykuły</li>
                        <li>Trendy fryzur ślubnych 2021</li>
                        <li>Jak przygotować się do wizyty makijażystki?</li>
                    </ul>
                </li>
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