import React, { useState } from 'react';
import logo from '../../images/logo/mobile-salon-logo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faChevronDown, faTimes, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import imageMakeup from '../../images/services/makijaze-slubne-mobile-salon.jpg';
import imageWeedingHair from '../../images/services/fryzury-slubne-mobile-salon.jpg';

const Header = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(0);
    const [city, setCity] = useState();
    const [activeTopHeader, setActiveTopHeader] = useState(false);

    const handleMouseEnter = (id) => {
        setActiveSubmenu(id);
    }

    const handleMouseLeave = () => {
        setActiveSubmenu(0);
    }

    return (
        <header className="container-header">

            {activeTopHeader &&
                <div className="row-header-topbar">
                    <h5>Wybierz swoje miasto:</h5>

                    <select className="city" onChange={(e) => setCity(e.target.value)}>
                        <option value="">Wybierz</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Gdańsk">Gdańsk</option>
                        <option value="Poznań">Poznań</option>
                    </select>

                    <FontAwesomeIcon icon={faTimes} onClick={() => setActiveTopHeader(!activeTopHeader)} />
                </div>
            }


            <div className="row-header-nav">
                <Link to="/" className="link-image"><img className="image-logo" src={logo} alt="mobile_salon_logo" /></Link>
                <nav className="menu-top">
                    <li className="menu-item">
                        <Link to="#" className="item-link" onMouseEnter={() => handleMouseEnter(1)}>Usługi <FontAwesomeIcon icon={faChevronDown} /></Link>
                        <div className={"container-submenu " + (activeSubmenu === 1 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                            <ul className="submenu-top">
                                <h4 className="submenu-title">Usługi</h4>
                                <li><Link to="/uslugi/fryzury-slubne" onClick={() => setActiveSubmenu(0)} className="submenu-link">Fryzury ślubne</Link></li>
                                <li><Link to="/uslugi/makijaze-slubne" onClick={() => setActiveSubmenu(0)} className="submenu-link">Makijaże ślubne</Link></li>
                                <li><Link to="/uslugi/fryzury-okazyjne" onClick={() => setActiveSubmenu(0)} className="submenu-link">Fryzury okazyjne</Link></li>
                                <li><Link to="/uslugi/makijaze-okazyjne" onClick={() => setActiveSubmenu(0)} className="submenu-link">Makijaże okazyjne</Link></li>
                            </ul>
                            <div className="box-service">
                                <div className="box-image-big">
                                    <div className="box-image">
                                        <img src={imageWeedingHair} alt="" className="image" />
                                    </div>
                                </div>
                                <h4 className="box-title">Fryzury ślubne</h4>
                                <p>Upięcia, koki z welonem, warkocze, ozdoby.</p>
                                <p>Ślub, spotkanie próbne, sesja zdjęciowa</p>
                            </div>
                            <div className="box-service">
                                <div className="box-image-big">
                                    <div className="box-image">
                                        <img src={imageMakeup} alt="" className="image" />
                                    </div>
                                </div>
                                <h4 className="box-title">Makijaże ślubne</h4>
                                <p>Trwałe i piękne, delikatne lub wyraźne.</p>
                                <p>Ślub, spotkanie próbne, sesja zdjęciowa</p>
                            </div>
                            <div className="box-service">
                                <div className="box-image-big">
                                    <div className="box-image">
                                        <img src={imageMakeup} alt="" className="image" />
                                    </div>
                                </div>
                                <h4 className="box-title">Fryzury okazyjne</h4>
                                <p>Trwałe i piękne, delikatne lub wyraźne.</p>
                                <p>Ślub, spotkanie próbne, sesja zdjęciowa</p>
                            </div>
                            <div className="box-service">
                                <div className="box-image-big">
                                    <div className="box-image">
                                        <img src={imageMakeup} alt="" className="image" />
                                    </div>
                                </div>
                                <h4 className="box-title">Makijaże okazyjne</h4>
                                <p>Trwałe i piękne, delikatne lub wyraźne.</p>
                                <p>Ślub, spotkanie próbne, sesja zdjęciowa</p>
                            </div>

                        </div>

                    </li>
                    <li className="menu-item">
                        <Link to="#" className="item-link" onMouseEnter={() => handleMouseEnter(2)}>Stylistki <FontAwesomeIcon icon={faChevronDown} /></Link>
                        <div className={"container-submenu " + (activeSubmenu === 2 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                            <ul className="submenu-top">
                                <li>Warszawa</li>
                                <li>Kraków</li>
                                <li>Wrocław</li>
                                <li>Poznań</li>
                                <li>Gdańsk</li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-item">
                        <Link to="#" className="item-link" onMouseEnter={() => handleMouseEnter(3)}>Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
                        <div className={"container-submenu " + (activeSubmenu === 3 ? "active" : "")} onMouseLeave={handleMouseLeave}>
                            <ul className="submenu-top">
                                <li>Najnowsze artykuły</li>
                                <li>Trendy fryzur ślubnych 2021</li>
                                <li>Jak przygotować się do wizyty makijażystki?</li>
                            </ul>
                        </div>
                    </li>
                </nav>

                <div className="box-city">
                    {
                        true &&
                        <>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <h5 onClick={() => setActiveTopHeader(true)}>
                                {city ? city : 'Wybierz miasto'}
                                {!activeTopHeader && city ? ' (zmień)' : ''}
                            </h5>
                        </>
                    }
                </div>



                <div className="box-user">
                    <Link className="box-login" to="#">
                        <h3 className="text-login">ZALOGUJ <FontAwesomeIcon icon={faSignInAlt} /></h3>
                    </Link>
                    <Link className="box-reservation" to="#">
                        <h3 className="text-reservation">ZAREZERWUJ</h3>
                    </Link>
                </div>
            </div>

        </header>
    )
}

export default Header