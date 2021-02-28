import React, { useState } from 'react';
import logo from '../../images/logo/mobile-salon-logo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import imageMakeup from '../../images/services/makijaze-slubne-mobile-salon.jpg';


const Header = () => {
    const [active, setActive] = useState(0);
    const [bgHeader, setBgHeader] = useState(false);

    const handleMouseEnter = (id) => {
        setActive(id);
        setBgHeader(true);
    }

    const handleMouseLeave = () => {
        setActive(0);
        setBgHeader(false);
    }

    return (
        <header className={bgHeader ? "bg-purple" : ""}>
            <img className="picture__logo" src={logo} alt="mobile_salon_logo" />
            <nav className="top-menu">
                <li>
                    <Link to="#" onMouseEnter={() => handleMouseEnter(1)}>Usługi <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <div className={"submenu-container active" + (active === 1 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                        <ul className="top-submenu">
                            <li>Fryzury ślubne</li>
                            <li>Makijaże ślubne</li>
                            <li>Fryzury okazyjne</li>
                            <li>Makijaże okazyjne</li>
                        </ul>
                        <div className="box">
                            <div className="image-container">
                                <div className="image-box">
                                    <img src={imageMakeup} alt="" className="image" />
                                </div>
                            </div>

                            <h4>Makijaże ślubne</h4>
                            <p>Bądź piękna na swoim ślubie</p>
                        </div>
                        <div className="box">
                            <div className="image-container">
                                <div className="image-box">
                                    <img src={imageMakeup} alt="" className="image" />
                                </div>
                            </div>

                            <h4>Fryzury ślubne</h4>
                            <p>Bądź piękna na swoim ślubie</p>
                        </div>

                    </div>

                </li>
                <li>
                    <Link to="#" onMouseEnter={() => handleMouseEnter(2)}>Stylistki <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <div className={"submenu-container " + (active === 2 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                        <ul className="top-submenu">
                            <li>Warszawa</li>
                            <li>Kraków</li>
                            <li>Wrocław</li>
                            <li>Poznań</li>
                            <li>Gdańsk</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="#" onMouseEnter={() => handleMouseEnter(3)}>Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
                    <div className={"submenu-container " + (active === 3 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                        <ul className="top-submenu">
                            <li>Najnowsze artykuły</li>
                            <li>Trendy fryzur ślubnych 2021</li>
                            <li>Jak przygotować się do wizyty makijażystki?</li>
                        </ul>
                    </div>
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
        </header >
    )
}

export default Header