import React from 'react';
import logo from '../../images/logo/mobile-salon-logo.png';

const Header = () => {

    return (
        <header>
            <div className="container container__header">

                <div className="row row__top">
                    <button className="button__area" type="button">Strefa Klientki</button>
                    <button className="button__area" type="button">Strefa Stylistki</button>
                </div>

                <div className="row row__menu">
                    <img className="picture__logo" src={logo} alt="mobile_salon_logo" />
                    <ul className="top-menu">
                        <li>Usługi</li>
                        <li>Zespół</li>
                        <li>Blog</li>
                        <li>Rezerwacja</li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header