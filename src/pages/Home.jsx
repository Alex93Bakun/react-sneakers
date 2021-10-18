import React from 'react';
import Card from '../components/Card/Card';

const Home = ({
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    items,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) => {
    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(12)] : filteredItems).map(
            (item, index) => (
                <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item}
                />
            )
        );
    };

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
            <div className="d-flex flex-wrap">{renderItems()}</div>
        </div>
    );
};

export default Home;
