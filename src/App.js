import React, { createContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import CartDrawer from './components/CartDrawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

export const AppContext = createContext({});

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const cartResponse = await axios.get('/cart');
            const favoritesResponse = await axios.get('/favorites');
            const itemsResponse = await axios.get('/items');

            setIsLoading(false);

            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        };
        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            if (cartItems.find((cartObj) => cartObj.id === obj.id)) {
                await axios.delete(`/cart/${obj.id}`);
                setCartItems((prev) =>
                    prev.filter((item) => item.id !== obj.id)
                );
            } else {
                const { data } = await axios.post('/cart', obj);
                setCartItems((prev) => [...prev, data]);
            }
        } catch (e) {
            alert('Не удалось добавить в корзину!');
        }
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

    const isItemAdded = (id) => {
        return cartItems.some((obj) => obj.id === id);
    };

    return (
        <AppContext.Provider
            value={{
                items,
                favorites,
                cartItems,
                isItemAdded,
                onAddToFavorite,
                setCartOpened,
                setCartItems,
            }}
        >
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
                        cartItems={cartItems}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                        isLoading={isLoading}
                    />
                </Route>
                <Route exact path="/favorites">
                    <Favorites />
                </Route>
            </div>
        </AppContext.Provider>
    );
};

export default App;
