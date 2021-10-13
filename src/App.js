import React from 'react';

const App = () => {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-45">
                <div className="headerLeft d-flex align-center">
                    <img
                        width={40}
                        height={40}
                        src="img/logo.png"
                        alt="logo"
                        className="mr-15"
                    />
                    <div>
                        <h3 className="headerTitle text-uppercase">React Sneakers</h3>
                        <p className="headerSubTitle">Магазин лучшиз кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30 d-flex align-center">
                        <img
                            width={18}
                            height={18}
                            src="img/cart.svg"
                            alt="cart"
                        />
                        <span>1205 руб.</span>
                    </li>
                    <li className="d-flex align-center">
                        <img
                            width={20}
                            height={20}
                            src="img/user.svg"
                            alt="cart"
                        />
                    </li>
                </ul>
            </header>
            <div className="content p-45">
                <h1 className="mb-40">Все кроссовки</h1>
                <div className="d-flex flex-wrap justify-between">
                    <div className="card mb-40">
                        <div className="d-flex flex-column align-center text-center">
                            <img
                                width={133}
                                height={112}
                                src="img/sneakers/1.jpg"
                                alt="sneakers"
                            />
                            <h5 className="mb-10">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </h5>
                        </div>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="d-flex flex-column align-center text-center">
                            <img
                                width={133}
                                height={112}
                                src="img/sneakers/2.jpg"
                                alt="sneakers"
                            />
                            <h5 className="mb-10">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </h5>
                        </div>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="d-flex flex-column align-center text-center">
                            <img
                                width={133}
                                height={112}
                                src="img/sneakers/3.jpg"
                                alt="sneakers"
                            />
                            <h5 className="mb-10">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </h5>
                        </div>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="d-flex flex-column align-center text-center">
                            <img
                                width={133}
                                height={112}
                                src="img/sneakers/4.jpg"
                                alt="sneakers"
                            />
                            <h5 className="mb-10">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </h5>
                        </div>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="d-flex flex-column align-center text-center">
                            <img
                                width={133}
                                height={112}
                                src="img/sneakers/5.jpg"
                                alt="sneakers"
                            />
                            <h5 className="mb-10">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </h5>
                        </div>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
