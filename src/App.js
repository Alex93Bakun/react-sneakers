import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Favorites from './pages/Favorites';

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios.get('/items').then((res) => {
            setItems(res.data);
        });
        axios.get('/cart').then((res) => {
            setCartItems(res.data);
        });
        axios.get('/favorites').then((res) => {
            setFavorites(res.data);
        });
    }, []);

    const onAddToCart = async (obj) => {
        const { data } = await axios.post('/cart', obj);
        setCartItems((prev) => [...prev, data]);
    };

    const onRemoveFromCart = (id) => {
        axios.delete(`/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                await axios.delete(`/favorites/${obj.id}`);
                setFavorites((prev) =>
                    prev.filter((item) => item.id !== obj.id)
                );
            } else {
                const { data } = await axios.post('/favorites', obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (e) {
            alert('Не удалось добавить в закладки!');
        }
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
            <Route exact path="/">
                <Home
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    items={items}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                />
            </Route>
            <Route exact path="/favorites">
                <Favorites
                    items={favorites}
                    onAddToFavorite={onAddToFavorite}
                />
            </Route>
        </div>
    );
};

export default App;
