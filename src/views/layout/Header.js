import React from 'react';

const Header = () => {

    return (
        <header>
            <div>Logo</div>
            <div>
                <ul className="top-menu">
                    <li className="menu-item">O nas</li>
                    <li className="menu-item">Usługi</li>
                    <li className="menu-item">Stylistki</li>
                    <li className="menu-item">Blog</li>
                </ul>
            </div>
            <div>Zamówienie</div>
        </header>
    )
}

export default Header