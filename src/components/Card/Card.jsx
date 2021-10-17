import React, { useState } from 'react';

import { priceFormat } from '../../utils/priceFormat';

import styles from './Card.module.scss';

const Card = ({
    id,
    name,
    price,
    imgUrl,
    onFavorite,
    onPlus,
    favorite = false,
}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorite);

    const formattedPrice = priceFormat(price);

    const onClickPlus = () => {
        onPlus({ name, imgUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, name, imgUrl, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`${styles.card} mr-35`}>
            <div className={styles.favorite}>
                <img
                    src={
                        isFavorite
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
