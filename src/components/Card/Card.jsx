import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

import styles from './Card.module.scss';

const Card = ({
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false,
}) => {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`${styles.card} mr-30`}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={150}
                    height={226}
                    viewBox="0 0 150 226"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="0"
                        y="0"
                        rx="10"
                        ry="10"
                        width="150"
                        height="130"
                    />
                    <rect x="0" y="146" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="165" rx="3" ry="3" width="93" height="15" />
                    <rect x="0" y="202" rx="8" ry="8" width="80" height="24" />
                    <rect
                        x="118"
                        y="194"
                        rx="8"
                        ry="8"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    {onFavorite && (
                        <div
                            className={styles.favorite}
                            onClick={onClickFavorite}
                        >
                            <img
                                src={
                                    isFavorite
                                        ? '/img/liked.svg'
                                        : '/img/unliked.svg'
                                }
                                alt="Unliked"
                            />
                        </div>
                    )}
                    <img
                        width="100%"
                        height={135}
                        src={imageUrl}
                        alt="Sneakers"
                    />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {onPlus && (
                            <img
                                className={styles.plus}
                                onClick={onClickPlus}
                                src={
                                    isItemAdded(id)
                                        ? '/img/btn-checked.svg'
                                        : '/img/btn-plus.svg'
                                }
                                alt="Plus"
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
