import React from 'react';
import Card from '../components/Card/Card';

const Home = ({
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    items,
    onAddToFavorite,
    onAddToCart,
}) => {
    return (
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
                    .map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Home;
