import React from 'react';
import {priceFormat} from '../utils/priceFormat';

const CartDrawer = ({ closeCartClick, cartItems = [], onRemove }) => {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина{' '}
                    <img
                        className="removeBtn cu-p"
                        src="img/btn-cross-hovered.svg"
                        alt="cross"
                        onClick={closeCartClick}
                    />
                </h2>

                {cartItems.length > 0 ? (
                    <>
                        <div className="items flex">
                            {cartItems.map((item) => {
                                const formattedPrice = priceFormat(item.price);
                                return (
                                    <div
                                        className="cartItem d-flex align-center justify-between mb-20"
                                        key={item.id}
                                    >
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.imgUrl})`,
                                            }}
                                            className="cartItemImg"
                                        />
                                        <div className="mr-20">
                                            <p>{item.name}</p>
                                            <b>{formattedPrice} руб.</b>
                                        </div>
                                        <img
                                            className="removeBtn"
                                            src="img/btn-cross-hovered.svg"
                                            alt="cross"
                                            onClick={() => onRemove(item.id)}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cartTotalBlock">
                            <ul>
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
                            <button className="greenButton">
                                Оформить заказ{' '}
                                <img src="img/arrow-right.svg" alt="arrow"/>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img
                            className="mb-20"
                            width="120px"
                            height="120px"
                            src="img/empty-cart.jpg"
                            alt="Empty"
                        />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ.
                        </p>
                        <button onClick={closeCartClick} className="greenButton">
                            <img src="img/arrow-right.svg" alt="arrow" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
