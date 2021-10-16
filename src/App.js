import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card/Card';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios
            .get('https://6169630309e030001712c346.mockapi.io/items')
            .then((res) => {
                setItems(res.data);
            });
        axios
            .get('https://6169630309e030001712c346.mockapi.io/cart')
            .then((res) => {
                setCartItems(res.data);
            });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://6169630309e030001712c346.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveFromCart = (id) => {
        axios.delete(`https://6169630309e030001712c346.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <CartDrawer
                    closeCartClick={() => setCartOpened(false)}
                    cartItems={cartItems}
                    onRemove={onRemoveFromCart}
                />
            )}
            <Header openCartClick={() => setCartOpened(true)} />
            <div className="content p-45">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>
                        {searchValue
                            ? `Поиск по запросу: "${searchValue}"`
                            : `Все кроссовки`}
                    </h1>
                    <div className="search-block d-flex">
                        <img src="img/search.svg" alt="search" />
                        {searchValue && (
                            <img
                                className="inputClear cu-p"
                                src="img/cross.svg"
                                alt="clear"
                                onClick={() => setSearchValue('')}
                            />
                        )}
                        <input
                            type="text"
                            placeholder="Поиск..."
                            onChange={onChangeSearchInput}
                            value={searchValue}
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items
                        .filter((item) =>
                            item.name
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((item, index) => (
                            <Card
                                key={index}
                                name={item.name}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                onFavorite={() =>
                                    console.log('Добавили в закладки')
                                }
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default App;
