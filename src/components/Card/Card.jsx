import React, { useState } from 'react';

import { priceFormat } from '../../utils/priceFormat';

import styles from './Card.module.scss';

const Card = ({ name, price, imgUrl, onFavorite, onPlus }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const formattedPrice = priceFormat(price);

    const onClickPlus = () => {
        onPlus({ name, imgUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite();
        setIsLiked(!isLiked);
    };

    return (
        <div className={`${styles.card} mr-35`}>
            <div className={styles.favorite}>
                <img
                    src={
                        isLiked
                            ? 'img/heart-liked.svg'
                            : 'img/heart-unliked.svg'
                    }
                    alt="unliked"
                    onClick={onClickFavorite}
                    className="cu-p"
                />
            </div>
            <img
                width={133}
                height={112}
                src={imgUrl.toString()}
                alt="sneakers"
                className="mb-15"
            />
            <h5 className="mb-10">{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{formattedPrice} руб.</b>
                </div>
                <img
                    src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
                    alt="plus"
                    onClick={onClickPlus}
                    className="cu-p"
                />
            </div>
        </div>
    );
};

export default Card;
