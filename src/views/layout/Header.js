import React, { useState } from 'react';
import logo from '../../images/logo/mobile-salon-logo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [active, setActive] = useState(0);

    const handleMouseEnter = (id) => {
        setActive(id);
    }

    const handleMouseLeave = () => {
        setActive(0);
    }

    return (
        <header>
            <img className="picture__logo" src={logo} alt="mobile_salon_logo" />
            <nav className="top-menu">
                <li>
                    <Link to="#" onMouseEnter={() => handleMouseEnter(1)}>Usługi <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <ul className={"top-submenu " + (active === 1 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                        <li>Fryzury ślubne</li>
                        <li>Makijaże ślubne</li>
                        <li>Fryzury okazyjne</li>
                        <li>Makijaże okazyjne</li>
                    </ul>
                </li>
                <li>
                    <Link to="#" onMouseEnter={() => handleMouseEnter(2)}>Stylistki <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <ul className={"top-submenu " + (active === 2 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                        <li>Warszawa</li>
                        <li>Kraków</li>
                        <li>Wrocław</li>
                        <li>Poznań</li>
                        <li>Gdańsk</li>
                    </ul>
                </li>
                <li>
                    <Link to="#" onMouseEnter={() => handleMouseEnter(3)}>Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <ul className={"top-submenu " + (active === 3 ? "active" : "")} onMouseLeave={handleMouseLeave}>
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