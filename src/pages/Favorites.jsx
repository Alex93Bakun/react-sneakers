import React from 'react';
import Card from '../components/Card/Card';

const Favorites = ({ items, onAddToFavorite }) => {
    return (
        <div className="content p-45">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        favorite={true}
                        onFavorite={onAddToFavorite}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
