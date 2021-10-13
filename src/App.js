import React from 'react';

const App = () => {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer d-flex flex-column">
                    <h2 className="mb-30 d-flex justify-between">
                        Корзина{' '}
                        <img
                            className="removeBtn cu-p"
                            src="img/btn-cross-hovered.svg"
                            alt="cross"
                        />
                    </h2>
                    <div className="items flex">
                        <div className="cartItem d-flex align-center justify-between mb-20">
                            <div
                                style={{
                                    backgroundImage: 'url(img/sneakers/2.jpg)',
                                }}
                                className="cartItemImg"
                            />
                            <div className="mr-20">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="img/btn-cross-hovered.svg"
                                alt="cross"
                            />
                        </div>
                        <div className="cartItem d-flex align-center justify-between mb-20">
                            <div
                                style={{
                                    backgroundImage: 'url(img/sneakers/4.jpg)',
                                }}
                                className="cartItemImg"
                            />
                            <div className="mr-20">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>8 499 руб.</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="img/btn-cross-hovered.svg"
                                alt="cross"
                            />
                        </div>
                    </div>
                    <ul className="cartTotalBlock">
                        <li className="d-flex mb-20">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex mb-25">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button>
                        Оформить заказ{' '}
                        <img src="img/arrow-right.svg" alt="arrow" />
                    </button>
                </div>
            </div>

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
                        <h3 className="headerTitle text-uppercase">
                            React Sneakers
                        </h3>
                        <p className="headerSubTitle">
                            Магазин лучшиз кроссовок
                        </p>
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
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="img/search.svg" alt="search" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-between">
                    <div className="card">
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/1.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/2.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/3.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/4.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/5.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/6.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/7.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
                        <div className="favorite">
                            <img src="img/heart-unliked.svg" alt="unliked" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/8.jpg"
                            alt="sneakers"
                        />
                        <h5 className="mb-10">
                            Мужские Кроссовки Nike Blazer Mid Suede
                        </h5>
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
