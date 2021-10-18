import React, {useContext, useState} from 'react';
import axios from 'axios';

import {priceFormat} from '../utils/priceFormat';
import {AppContext} from '../App';

import Info from './Info';

const CartDrawer = ({closeCartClick, onRemove}) => {
    const {cartItems, setCartItems} = useContext(AppContext);
    const [orderId, setOrderId] = useState(null);
    const [isOrdered, setIsOrdered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onOrderClick = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('/orders', {items: cartItems});
            setOrderId(data.id);
            setIsOrdered(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                await axios.delete(`cart/${cartItems[i].id}`);
            }
        } catch (e) {
            alert('Не удалось создать заказ :(');
        }
        setIsLoading(false);
    };

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
                            <button
                                className="greenButton"
                                onClick={onOrderClick}
                                disabled={isLoading}
                            >
                                Оформить заказ{' '}
                                <img src="img/arrow-right.svg" alt="arrow"/>
                            </button>
                        </div>
                    </>
                ) : isOrdered ? (
                    <Info
                        imgUrl="img/complete-order.jpg"
                        title="Заказ оформлен!"
                        description={`Ваш заказ №${orderId} скоро будет передан курьерской доставке`}
                        width={83}
                        height={120}
                    />
                ) : (
                    <Info
                        imgUrl="img/empty-cart.jpg"
                        title="Корзина пустая"
                        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                        width={120}
                        height={120}
                    />
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
