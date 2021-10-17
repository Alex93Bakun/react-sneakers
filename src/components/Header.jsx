import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openCartClick }) => {
    return (
        <header className="d-flex justify-between align-center p-45">
            <Link to="/">
                <div className="headerLeft d-flex align-center">
                    <img
                        width={40}
                        height={40}
                        src="img/logo.png"
                        alt="logo"
                        className="mr-15"
                    />
                    <div>
                        <h3 className="headerTitle text-uppercase">
                            React Sneakers
                        </h3>
                        <p className="headerSubTitle">
                            Магазин лучшиз кроссовок
                        </p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li
                    className="mr-30 d-flex align-center cu-p"
                    onClick={openCartClick}
                >
                    <img width={18} height={18} src="img/cart.svg" alt="cart" />
                    <span>1205 руб.</span>
                </li>
                <li className="d-flex align-center cu-p mr-30">
                    <Link to="/favorites">
                        <img
                            width={20}
                            height={20}
                            src="img/heart.svg"
                            alt="favorites"
                        />
                    </Link>
                </li>
                <li className="d-flex align-center cu-p">
                    <img width={20} height={20} src="img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
